const url = './data/members.json';
const container = document.querySelector('#directoryContainer');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
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
        const card = document.createElement('section');
        card.classList.add('member-card');

        const levelName = getLevelName(member.membership);

        card.innerHTML = `
            <img src="images/${member.image}"
                alt="${member.name} — ${levelName}, ${member.industry}"
                width="80" height="80" loading="lazy">

            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
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
