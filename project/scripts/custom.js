// custom.js – ES Module for dynamic equipment + modal + last viewed tracking

import { loadEquipmentData } from "./modules/fetchEquipment.js";
import { openModal, closeModal, setupModalControls } from "./modules/modal.js";
import { saveLastViewed, loadLastViewedInfo } from "./modules/storage.js";

const cardsContainer = document.getElementById("equipmentCards");
const lastViewedBox = document.getElementById("lastViewed");

async function init() {
    try {
        const equipmentList = await loadEquipmentData();

        equipmentList.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <h4>${item.name}</h4>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Environment:</strong> ${item.environment}</p>
                <button class="btn" data-id="${item.id}">More Details</button>
            `;

            cardsContainer.appendChild(card);
        });

        document.querySelectorAll(".btn[data-id]").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");

                const item = equipmentList.find((eq) => eq.id == id);

                saveLastViewed(item);
                showLastViewed();
                openModal(item);
            });
        });

        setupModalControls();
        showLastViewed();

    } catch (error) {
        console.error("Error initializing equipment page:", error);
        cardsContainer.innerHTML = `<p style="color:red;">Failed to load equipment data.</p>`;
    }
}

function showLastViewed() {
    if (!lastViewedBox) return; 

    const data = loadLastViewedInfo();

    if (!data) {
        lastViewedBox.innerHTML = "<p>No equipment viewed yet.</p>";
        return;
    }

    lastViewedBox.innerHTML = `
        <h4>${data.name}</h4>
        <p><strong>Viewed:</strong> ${data.timestamp}</p>
    `;
}

init();
