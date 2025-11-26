
import { places } from "../data/discover.mjs";

const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}


const visitMessage = document.querySelector("#visitMessage");
const STORAGE_KEY = "discover-last-visit";
const now = Date.now();

if (visitMessage) {
    const lastVisit = Number(localStorage.getItem(STORAGE_KEY));

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const msPerDay = 1000 * 60 * 60 * 24;
        const diffMs = now - lastVisit;
        const days = Math.floor(diffMs / msPerDay);

        if (days < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (days === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${days} days ago.`;
        }
    }


    localStorage.setItem(STORAGE_KEY, String(now));
}


const grid = document.querySelector("#discoverGrid");

if (grid && Array.isArray(places)) {
    places.forEach((place, index) => {
        const card = document.createElement("article");
        card.classList.add("discover-card", `card${index + 1}`);

        card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.image}" alt="${place.imageAlt}" loading="lazy" width="300" height="200">
        <figcaption>${place.name}</figcaption>
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button type="button" class="discover-learn-more">Learn more</button>
    `;

        grid.appendChild(card);
    });
}
