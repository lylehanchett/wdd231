const menuBtn = document.getElementById('menuBtn');
const primaryNav = document.getElementById('primaryNav');

if (menuBtn && primaryNav) {
    menuBtn.addEventListener('click', () => {
        const open = primaryNav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open);
    });
}


const path = location.pathname.replace(/\/$/, '');
document.querySelectorAll('#primaryNav a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href === './' && (path.endsWith('/wdd231') || path.endsWith('/index.html'))) a.classList.add('active');
    else if (href && path.includes(href)) a.classList.add('active');
});
