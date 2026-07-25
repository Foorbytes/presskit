const sharedHeader = `
<header class="site-header" data-site-header>
    <a class="brand" href="index.html" aria-label="Foorbytes home">
        <img src="assets/images/foorbytes-logo-horizontal.png" alt="Foorbytes">
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" data-menu-toggle>
        <span></span><span></span><span></span>
        <span class="sr-only">Open menu</span>
    </button>
    <nav class="site-nav" id="site-navigation" aria-label="Main navigation" data-site-nav>
        <a href="index.html">Home</a>
        <a href="badcredit.html">Bad Credit? No Problem!</a>
        <a href="news.html">News &amp; Events</a>
        <a href="https://discord.gg/vkA5VkzYuy" target="_blank" rel="noopener noreferrer">Join Our Discord!</a>
    </nav>
</header>`;

const sharedFooter = `
<footer class="site-footer section-shell">
    <span>© 2026 Foorbytes</span>
    <div class="footer-links">
        <a href="badcredit.html">Bad Credit? No Problem!</a>
        <a href="news.html">News &amp; Events</a>
        <a href="https://discord.gg/vkA5VkzYuy" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://www.youtube.com/channel/UCG5-jNzfXqAc9EXtiSdhjzA" target="_blank" rel="noopener noreferrer">YouTube</a>
    </div>
</footer>`;

const existingHeader = document.querySelector("header.site-header");
const existingFooter = document.querySelector("footer.site-footer");

if (existingHeader) {
    existingHeader.outerHTML = sharedHeader;
}

if (existingFooter) {
    existingFooter.outerHTML = sharedFooter;
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (menuToggle && siteNav) {
    const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        siteNav.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });
}

document.querySelectorAll("[data-email-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const topic = String(data.get("topic") || "General inquiry").trim();
        const message = String(data.get("message") || "").trim();
        const status = form.querySelector("[data-form-status]");

        const subject = `Foorbytes website: ${topic}`;
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Topic: ${topic}`,
            "",
            message
        ].join("\n");

        if (status) {
            status.textContent = "Opening your email app with the message ready to send.";
        }

        window.location.href = `mailto:foorbits@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});
