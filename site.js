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
