const courses = [
    { code: 'WDD 130', title: 'Web Fundamentals', credits: 2, category: 'WDD', completed: true },
    { code: 'WDD 131', title: 'Dynamic Web Fundamentals', credits: 3, category: 'WDD', completed: true },
    { code: 'WDD 231', title: 'Front-End Web Development I', credits: 3, category: 'WDD', completed: false },
    { code: 'CSE 110', title: 'Introduction to Programming', credits: 2, category: 'CSE', completed: true },
    { code: 'CSE 111', title: 'Programming with Functions', credits: 2, category: 'CSE', completed: true },
    { code: 'CSE 210', title: 'Programming with Classes', credits: 2, category: 'CSE', completed: true }
];


const listEl = document.getElementById('courseList');
const totalEl = document.getElementById('creditTotal');
const buttons = document.querySelectorAll('.filter-btn');

function render(list) {
    listEl.innerHTML = '';
    list.forEach(c => {
        const card = document.createElement('article');
        card.className = 'card' + (c.completed ? ' completed' : '');
        card.innerHTML = `
      <h3>${c.code}</h3>
      <p class="meta">${c.title}</p>
      <p class="meta">Credits: ${c.credits}</p>
      <p class="meta">Category: ${c.category}</p>
      <p class="meta status">${c.completed ? '✅ Completed' : '🕓 In Progress'}</p>
    `;
        listEl.appendChild(card);
    });
    const total = list.reduce((sum, c) => sum + c.credits, 0);
    totalEl.textContent = total;
}


function applyFilter(type) {
    let filtered = courses;
    if (type === 'WDD') filtered = courses.filter(c => c.category === 'WDD');
    if (type === 'CSE') filtered = courses.filter(c => c.category === 'CSE');
    render(filtered);
}


buttons.forEach(btn =>
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter))
);


render(courses);
