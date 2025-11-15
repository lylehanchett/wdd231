

export function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

export function renderSections(sections) {
    const rows = sections.map(section => `
        <tr>
            <td>${section.sectionNumber}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        </tr>
    `);

    document.querySelector("#sections").innerHTML = rows.join("");
}
