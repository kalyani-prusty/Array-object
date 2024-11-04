const students = [
    { name: "Kalyani", chemistry: 85, biology: 90, dob: "15-05-2003" },
    { name: "Chandan", chemistry: 85, biology: 90, dob: "20-06-2003" },
    { name: "Suvam", chemistry: 80, biology: 80, dob: "15-05-2004" },
    { name: "kp", chemistry: 85, biology: 90, dob: "15-05-2003" }
];

function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}`);
}

students.sort((a, b) => {
    // 1. Sort by total marks
    const totalA = a.chemistry + a.biology;
    const totalB = b.chemistry + b.biology;
    if (totalA !== totalB) return totalB - totalA;

    // 2. Sort by biology marks
    if (a.biology !== b.biology) return b.biology - a.biology;

    // 3. Sort by chemistry marks
    if (a.chemistry !== b.chemistry) return b.chemistry - a.chemistry;

    // 4. Sort by date of birth (older students first)
    const dateA = parseDate(a.dob);
    const dateB = parseDate(b.dob);
    return dateA - dateB;
});

console.log(students);
