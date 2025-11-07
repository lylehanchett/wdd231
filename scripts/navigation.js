const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("open");
});
