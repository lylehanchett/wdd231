const url = './data/members.json';
const container = document.querySelector('#directoryContainer');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');


container.style.minHeight = '320px';

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (err) {
        console.error('Error loading members:', err);
        container.innerHTML = '<p>Unable to load directory members.</p>';
    } finally {
        container.style.minHeight = '';
    }
}
getMembers();

function getLevelName(level) {
    switch (level) {
        case 3: return 'Gold Member';
        case 2: return 'Silver Member';
        default: return 'Member';
    }
}

function displayMembers(members) {
    container.innerHTML = '';

    members.forEach(member => {
        const levelName = getLevelName(member.membership);

        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
      <img
        src="images/${member.image}"
        alt="${member.name} — ${levelName}, ${member.industry}"
        width="200" height="120"
        loading="lazy" decoding="async" fetchpriority="low"
      >

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


gridBtn.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
    gridBtn.setAttribute('aria-pressed', 'true');
    listBtn.setAttribute('aria-pressed', 'false');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
    listBtn.setAttribute('aria-pressed', 'true');
    gridBtn.setAttribute('aria-pressed', 'false');
});


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
