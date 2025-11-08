const url = './data/members.json';
const container = document.querySelector('#directoryContainer');

container.style.minHeight = "300px";

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
        container.style.minHeight = ""; 
    } catch (error) {
        console.error("Error loading members:", error);
        container.innerHTML = "<p>Unable to load directory members.</p>";
    }
}
getMembers();

function getLevelName(level) {
    switch (level) {
        case 3: return "Gold Member";
        case 2: return "Silver Member";
        default: return "Member";
    }
}

function displayMembers(members) {
    container.innerHTML = '';

    members.forEach(member => {
        const levelName = getLevelName(member.membership);

        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}"
                alt="${member.name} — ${levelName}, ${member.industry}"
                width="200" height="120"
                loading="lazy" fetchpriority="low">

            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Visit website for ${member.name}">
               Visit Website
            </a>
            <p class="level level-${member.membership}">${levelName}</p>
        `;

        container.appendChild(card);
    });
}

document.querySelector('#gridBtn').addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
});

document.querySelector('#listBtn').addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
