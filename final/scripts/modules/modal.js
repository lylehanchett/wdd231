
const modal = document.getElementById("equipmentModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFeatures = document.getElementById("modalFeatures");
const closeBtn = document.getElementById("modalClose");

export function openModal(item) {
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;

    modalFeatures.innerHTML = "";
    item.features.forEach((feat) => {
        const li = document.createElement("li");
        li.textContent = feat;
        modalFeatures.appendChild(li);
    });

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
}

export function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}

export function setupModalControls() {
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
}
