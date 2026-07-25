const pageFile = (() => {
    const file = window.location.pathname.split("/").pop();
    return file || "index.html";
})();

const headerClass = document.body.classList.contains("home-page")
    ? "site-header"
    : "site-header site-header-solid";

const navItems = [
    ["index.html", "Home"],
    ["badcredit.html", "Game"],
    ["news.html", "News"],
    ["about.html", "About"],
    ["support.html", "Support"],
    ["media.html", "Media"]
];

const sharedHeader = `
<header class="${headerClass}" data-site-header>
    <a class="brand" href="index.html" aria-label="Foorbytes home">
        <img src="assets/images/foorbytes-logo-horizontal.png" alt="Foorbytes">
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" data-menu-toggle>
        <span></span><span></span><span></span>
        <span class="sr-only">Open menu</span>
    </button>
    <nav class="site-nav" id="site-navigation" aria-label="Main navigation" data-site-nav>
        ${navItems.map(([href, label]) => `<a${pageFile === href ? ' class="is-current"' : ""} href="${href}">${label}</a>`).join("")}
        <a href="https://discord.gg/vkA5VkzYuy" target="_blank" rel="noopener noreferrer">Discord</a>
    </nav>
</header>`;

const sharedFooter = `
<footer class="site-footer section-shell">
    <span>© 2026 Foorbytes</span>
    <div class="footer-links">
        <a href="about.html">About</a>
        <a href="support.html">Support</a>
        <a href="media.html">Media</a>
        <a href="news.html">News</a>
        <a href="https://discord.gg/vkA5VkzYuy" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="https://www.youtube.com/channel/UCG5-jNzfXqAc9EXtiSdhjzA" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="feed.xml">RSS</a>
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

const routeMetadata = {
    "index.html": {
        title: "Foorbytes | Indie Game Developer",
        description: "Foorbytes is a one-person indie game developer creating offbeat PC and mobile games.",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "website"
    },
    "badcredit.html": {
        title: "Bad Credit? No Problem! | Foorbytes",
        description: "Bad Credit? No Problem! is an offbeat title loan office simulation available on Steam and the iOS App Store.",
        image: "https://foorbytes.com/assets/images/bad-credit-hero.png",
        type: "website"
    },
    "news.html": {
        title: "News & Events | Foorbytes",
        description: "Release announcements, milestones, and development stories from Foorbytes.",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "website"
    },
    "about.html": {
        title: "About Foorbytes | Indie Game Developer",
        description: "Meet Foorbytes, the independent game studio run by Rob and built around unusual ideas, direct design, and memorable player decisions.",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "website"
    },
    "support.html": {
        title: "Support & FAQ | Foorbytes",
        description: "Official support and frequently asked questions for Bad Credit? No Problem! on Steam and iOS.",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "website"
    },
    "media.html": {
        title: "Media & Creator Resources | Foorbytes",
        description: "Official Foorbytes logos, game screenshots, descriptions, store links, trailers, and creator resources.",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "website"
    },
    "million-downloads.html": {
        title: "One Million App Store Downloads | Foorbytes",
        description: "Bad Credit? No Problem! has passed one million first-time downloads on Apple’s App Store.",
        image: "https://foorbytes.com/assets/images/million-downloads.png",
        type: "article"
    },
    "steam-launch.html": {
        title: "Bad Credit? No Problem! Launches on Steam | Foorbytes",
        description: "Bad Credit? No Problem! launched on Steam on October 2, 2025.",
        image: "https://foorbytes.com/assets/images/news/steam-launch.png",
        type: "article"
    },
    "steam-announcement.html": {
        title: "Steam Edition Announced | Foorbytes",
        description: "Foorbytes announced the Steam edition of Bad Credit? No Problem! for October 2, 2025.",
        image: "https://foorbytes.com/assets/images/news/steam-announcement.jpg",
        type: "article"
    },
    "fright-night-files.html": {
        title: "Fright Night Files Released | Foorbytes",
        description: "Fright Night Files expansion news for Bad Credit? No Problem!",
        image: "https://foorbytes.com/assets/images/news/fright-night.png",
        type: "article"
    },
    "100k-downloads.html": {
        title: "100,000 Downloads | Foorbytes",
        description: "Bad Credit? No Problem! passed 100,000 downloads in August 2024.",
        image: "https://foorbytes.com/assets/images/news/100k-downloads.png",
        type: "article"
    },
    "game-jam-to-release.html": {
        title: "From Game Jam to Full Release | Foorbytes",
        description: "The development history of Bad Credit? No Problem!, from a game-jam prototype to a full release.",
        image: "https://foorbytes.com/assets/images/news/game-jam.png",
        type: "article"
    },
    "google-play-preregistration.html": {
        title: "Google Play Pre-Registration Archive | Foorbytes",
        description: "Archived announcement for the 2024 Google Play preregistration of Bad Credit? No Problem!",
        image: "https://foorbytes.com/assets/images/news/google-play.png",
        type: "article"
    },
    "app-store-preorder.html": {
        title: "Bad Credit? No Problem! Pre-Order Archive | Foorbytes",
        description: "Archived iOS preorder announcement for Bad Credit? No Problem! from July 2024.",
        image: "https://foorbytes.com/assets/images/news/app-store-preorder.png",
        type: "article"
    },
    "welcome-to-foorbytes.html": {
        title: "Welcome to Foorbytes | Foorbytes",
        description: "The original introduction to Foorbytes and Bad Credit? No Problem!",
        image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
        type: "article"
    }
};

const metadata = routeMetadata[pageFile] || {
    title: document.title || "Foorbytes",
    description: document.querySelector('meta[name="description"]')?.content || "Official website of indie game developer Foorbytes.",
    image: "https://foorbytes.com/assets/images/foorbytes-social-card.svg",
    type: "website"
};

const absoluteUrl = pageFile === "index.html"
    ? "https://foorbytes.com/"
    : `https://foorbytes.com/${pageFile}`;

const ensureMeta = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

const ensureLink = (selector, attributes) => {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("link");
        document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

document.title = metadata.title;
ensureMeta('meta[name="description"]', { name: "description", content: metadata.description });
ensureMeta('meta[property="og:title"]', { property: "og:title", content: metadata.title });
ensureMeta('meta[property="og:description"]', { property: "og:description", content: metadata.description });
ensureMeta('meta[property="og:type"]', { property: "og:type", content: metadata.type });
ensureMeta('meta[property="og:url"]', { property: "og:url", content: absoluteUrl });
ensureMeta('meta[property="og:image"]', { property: "og:image", content: metadata.image });
ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: "Foorbytes" });
ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: metadata.title });
ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: metadata.description });
ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: metadata.image });
ensureLink('link[rel="canonical"]', { rel: "canonical", href: absoluteUrl });
ensureLink('link[rel="alternate"][type="application/rss+xml"]', { rel: "alternate", type: "application/rss+xml", title: "Foorbytes News", href: "https://foorbytes.com/feed.xml" });
ensureLink('link[rel="icon"]', { rel: "icon", href: "assets/images/foorbytes-logo.png" });
ensureLink('link[rel="apple-touch-icon"]', { rel: "apple-touch-icon", href: "assets/images/foorbytes-logo.png" });

if (!document.head.querySelector('script[data-foorbytes-structured-data]')) {
    const structuredData = (() => {
        if (pageFile === "index.html" || pageFile === "about.html") {
            return {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Foorbytes",
                url: "https://foorbytes.com/",
                logo: "https://foorbytes.com/assets/images/foorbytes-logo.png",
                founder: { "@type": "Person", name: "Rob" },
                sameAs: [
                    "https://discord.gg/vkA5VkzYuy",
                    "https://www.youtube.com/channel/UCG5-jNzfXqAc9EXtiSdhjzA"
                ]
            };
        }

        if (pageFile === "badcredit.html") {
            return {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "VideoGame",
                        name: "Bad Credit? No Problem!",
                        url: absoluteUrl,
                        image: "https://foorbytes.com/assets/images/bad-credit-hero.png",
                        author: { "@type": "Organization", name: "Foorbytes" },
                        gamePlatform: ["Steam", "iOS"],
                        applicationCategory: "Game"
                    },
                    {
                        "@type": "VideoObject",
                        name: "Bad Credit? No Problem! Official Trailer",
                        description: metadata.description,
                        thumbnailUrl: "https://foorbytes.com/assets/images/bad-credit-hero.png",
                        embedUrl: "https://www.youtube.com/embed/ByW7k-sJ8oM",
                        uploadDate: "2024-08-08"
                    }
                ]
            };
        }

        if (metadata.type === "article") {
            const published = document.querySelector("time")?.getAttribute("datetime") || undefined;
            return {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: document.querySelector("h1")?.textContent.trim() || metadata.title,
                description: metadata.description,
                image: metadata.image,
                url: absoluteUrl,
                datePublished: published,
                author: { "@type": "Person", name: "Rob" },
                publisher: {
                    "@type": "Organization",
                    name: "Foorbytes",
                    logo: { "@type": "ImageObject", url: "https://foorbytes.com/assets/images/foorbytes-logo.png" }
                }
            };
        }

        return null;
    })();

    if (structuredData) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.foorbytesStructuredData = "true";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
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
