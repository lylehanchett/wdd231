const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.table(data.prophets); 
    displayProphets(data.prophets);
};

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const dob = document.createElement('p');
        const pob = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
