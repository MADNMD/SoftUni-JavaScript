async function studentList() {

    const url = `http://localhost:3030/jsonstore/collections/students`;
    const tableBody = document.querySelector('#results tbody');
    const firstNameInput = document.querySelector('[name="firstName"]');
    const lastNameInput = document.querySelector('[name="lastName"]');
    const facultyNumberInput = document.querySelector('[name="facultyNumber"]');
    const gradeInput = document.querySelector('[name="grade"]');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onSubmit);

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(studentsInfo => {

        const tableRow = document.createElement('tr');

        const firstNameCell = tableRow.insertCell(0);
        firstNameCell.textContent = studentsInfo.firstName;

        const lastNameCell = tableRow.insertCell(1);
        lastNameCell.textContent = studentsInfo.lastName;

        const facultyNumberCell = tableRow.insertCell(2);
        facultyNumberCell.textContent = studentsInfo.facultyNumber;

        const gradeCell = tableRow.insertCell(3);
        gradeCell.textContent = Number(studentsInfo.grade);

        tableBody.appendChild(tableRow);
    });

    async function onSubmit(event) {
        event.preventDefault();


        if (firstNameInput.value === '') {
            return alert('The field "First Name" is empty');
        }
        if (lastNameInput.value === '') {
            return alert('The field "Last Name" is empty');
        }
        if (facultyNumberInput.value === '') {
            return alert('The field "Faculty Number" is empty');
        }
        if (gradeInput.value === '') {
            return alert('The field "Grade" is empty');
        }
        if (isNaN(gradeInput.value)) {
            return alert('Wrong input data');
        }

        const data = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: Number(gradeInput.value),
        }

        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        await fetch(url, option);

        const tableRow = document.createElement('tr');

        const firstNameCell = tableRow.insertCell(0);
        firstNameCell.textContent = firstNameInput.value;

        const lastNameCell = tableRow.insertCell(1);
        lastNameCell.textContent = lastNameInput.value;

        const facultyNumberCell = tableRow.insertCell(2);
        facultyNumberCell.textContent = facultyNumberInput.value;

        const gradeCell = tableRow.insertCell(3);
        gradeCell.textContent = Number(gradeInput.value);

        tableBody.appendChild(tableRow);

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }
}
studentList();