

const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        { sectionNumber: 1, enrolled: 88, instructor: "Brother Bingham" },
        { sectionNumber: 2, enrolled: 81, instructor: "Sister Shultz" },
        { sectionNumber: 3, enrolled: 95, instructor: "Sister Smith" },
    ],

    changeEnrollment: function (sectionNumber, add = true) {
        const index = this.sections.findIndex(
            sec => sec.sectionNumber == sectionNumber
        );

        if (index >= 0) {
            if (add) {
                this.sections[index].enrolled++;
            } else {
                this.sections[index].enrolled--;
            }
        }
    }
};

export default byuiCourse;
