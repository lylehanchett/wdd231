
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

const timestampInput = document.querySelector("#timestamp");
if (timestampInput) {
    const now = new Date();
    timestampInput.value = now.toISOString();
}

const modalButtons = document.querySelectorAll(".more-info-btn");
const closeButtons = document.querySelectorAll(".close-modal");

modalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.modalTarget;
        const dialog = document.getElementById(targetId);
        if (dialog && typeof dialog.showModal === "function") {
            dialog.showModal();
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dialog = btn.closest("dialog");
        if (dialog) dialog.close();
    });
});

const dialogs = document.querySelectorAll("dialog.membership-modal");
dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const inDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!inDialog) {
            dialog.close();
        }
    });
});

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".membership-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.12}s`;
        card.classList.add("membership-animate");
    });
});
