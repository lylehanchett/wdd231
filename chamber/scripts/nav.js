const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    const expanded = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', expanded);
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", false);
    }
});

navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", false);
        }
    });
});
