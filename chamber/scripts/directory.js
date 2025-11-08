const url = './data/members.json';
const container = document.querySelector('#directoryContainer');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
getMembers();

function displayMembers(members) {
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="level level-${member.membership}">Membership Level: ${member.membership}</p>
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
