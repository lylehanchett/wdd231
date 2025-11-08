const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    const expanded = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', expanded);
});
