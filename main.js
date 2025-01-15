document.addEventListener("DOMContentLoaded", function () {
    const recordsTable = document.getElementById("records-table");
    if (recordsTable) {
        fetch("data/students.json")
            .then(response => response.json())
            .then(data => {
                data.forEach((student, index) => {
                    recordsTable.innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${student.id}</td>
                            <td><img src="${student.picture}" class="img-thumbnail" style="width: 50px;"></td>
                            <td>${student.class}</td>
                            <td>${student.name}</td>
                            <td>${student.percentage}%</td>
                            <td>${student.result}</td>
                        </tr>
                    `;
                });
            });
    }
});