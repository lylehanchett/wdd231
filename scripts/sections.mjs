

export function setSectionSelection(sections) {
    const dropdown = document.querySelector("#sectionNumber");

    sections.forEach(section => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = section.sectionNumber;
        dropdown.appendChild(option);
    });
}
