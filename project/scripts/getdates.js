const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModPara = document.getElementById("lastModified");
if (lastModPara) {
    lastModPara.textContent = "Last Modification: " + document.lastModified;
}