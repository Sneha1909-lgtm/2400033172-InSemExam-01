let sortOrder = [true, true, true]; // Initial sort direction for each column

function sortTable(colIndex) {
    const table = document.getElementById("employeeTable");
    const tbody = table.tBodies[0];
    let rows = Array.from(tbody.rows);

    sortOrder[colIndex] = !sortOrder[colIndex];
    rows.sort((a, b) => {
        let valA = a.cells[colIndex].textContent.trim();
        let valB = b.cells[colIndex].textContent.trim();

        if (!isNaN(valA) && !isNaN(valB)) {
            valA = Number(valA);
            valB = Number(valB);
        }

        if (valA < valB) return sortOrder[colIndex] ? -1 : 1;
        if (valA > valB) return sortOrder[colIndex] ? 1 : -1;
        return 0;
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    rows.forEach(row => tbody.appendChild(row));
}