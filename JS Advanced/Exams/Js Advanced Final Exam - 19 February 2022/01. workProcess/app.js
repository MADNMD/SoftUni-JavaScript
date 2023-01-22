function solve() {

    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const dateInput = document.getElementById('birth');
    const positionInput = document.getElementById('position');
    const salaryInput = document.getElementById('salary');
    const tableBody = document.getElementById('tbody');
    const budget = document.getElementById('sum');

    const addWorkerBtn = document.getElementById('add-worker');

    addWorkerBtn.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' ||
            dateInput.value === '' || positionInput.value === '' || salaryInput.value === '') {
            return;
        }

        const tableRow = document.createElement('tr');

        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstNameInput.value;

        const tdLastName = document.createElement('td');
        tdLastName.textContent = lastNameInput.value;

        const tdEmail = document.createElement('td');
        tdEmail.textContent = emailInput.value;

        const tdDate = document.createElement('td');
        tdDate.textContent = dateInput.value;

        const tdPosition = document.createElement('td');
        tdPosition.textContent = positionInput.value;

        const tdSalary = document.createElement('td');
        tdSalary.className = 'allSalary';
        tdSalary.textContent = salaryInput.value;

        const tdButtons = document.createElement('td');

        const firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';

        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);

        tableRow.appendChild(tdFirstName);
        tableRow.appendChild(tdLastName);
        tableRow.appendChild(tdEmail);
        tableRow.appendChild(tdDate);
        tableRow.appendChild(tdPosition);
        tableRow.appendChild(tdSalary);
        tableRow.appendChild(tdButtons);

        tableBody.appendChild(tableRow);

        const editFirstName = firstNameInput.value;
        const editLastName = lastNameInput.value;
        const edinEmail = emailInput.value;
        const editDate = dateInput.value;
        const editPosition = positionInput.value;
        const editSalary = salaryInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        dateInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';

        let totalSum = 0;
        const allSalaries = Array.from(document.querySelectorAll('.allSalary'));
        allSalaries.forEach(salary => totalSum += Number(salary.textContent));
        budget.textContent = totalSum.toFixed(2);

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            firstNameInput.value = editFirstName;
            lastNameInput.value = editLastName;
            emailInput.value = edinEmail;
            dateInput.value = editDate;
            positionInput.value = editPosition;
            salaryInput.value = editSalary;

            tableRow.remove();

            let editTotalSum = 0;
            const allSalaries = Array.from(document.querySelectorAll('.allSalary'));
            allSalaries.forEach(salary => editTotalSum += Number(salary.textContent));
            budget.textContent = editTotalSum.toFixed(2);
        }
        firedBtn.addEventListener('click', onFire);

        function onFire() {
            tableBody.removeChild(tableRow);

            let fireTotalSum = 0;
            const allSalaries = Array.from(document.querySelectorAll('.allSalary'));
            allSalaries.forEach(salary => fireTotalSum += Number(salary.textContent));
            budget.textContent = fireTotalSum.toFixed(2);
        }
    }
}
solve()