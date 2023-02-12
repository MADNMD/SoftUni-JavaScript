window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let dateInInput = document.getElementById('date-in');
    let dateOutInput = document.getElementById('date-out');
    let peopleCountInput = document.getElementById('people-count');
    let nextButton = document.getElementById('next-btn');
    let infoReservation = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let verification = document.getElementById('verification');

    nextButton.addEventListener('click', nextBtn);

    function nextBtn(event) {
        event.preventDefault();
        let date1 = new Date(dateInInput.value);
        let date2 = new Date(dateOutInput.value);

        if (firstNameInput.value === '' || lastNameInput.value === '' || dateInInput.value === '' ||
            dateOutInput.value === '' || peopleCountInput.value === '' || date1 >= date2) {
            return;
        }
        let liElements = document.createElement('li');
        liElements.className = 'reservation-content';
        infoReservation.appendChild(liElements);

        let article = document.createElement('article');
        liElements.appendChild(article);

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        article.appendChild(h3);

        let p1 = document.createElement('p');
        p1.textContent = `From date: ${dateInInput.value}`;
        article.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = `To date: ${dateOutInput.value}`;
        article.appendChild(p2);

        let p3 = document.createElement('p');
        p3.textContent = `For ${peopleCountInput.value} people`;
        article.appendChild(p3);

        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        liElements.appendChild(editBtn);

        let continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        liElements.appendChild(continueBtn);

        let edinFirstName = firstNameInput.value;
        let edinLastName = lastNameInput.value;
        let editDateIn = dateInInput.value;
        let editDateOut = dateOutInput.value;
        let editPeopleCount = Number(peopleCountInput.value);

        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        peopleCountInput.value = '';

        nextButton.disabled = true;

        editBtn.addEventListener('click', onEdit);

        function onEdit() {

            firstNameInput.value = edinFirstName;
            lastNameInput.value = edinLastName;
            dateInInput.value = editDateIn;
            dateOutInput.value = editDateOut;
            peopleCountInput.value = editPeopleCount;

            liElements.remove();

            nextButton.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            let liContinueElement = document.createElement('li');
            liContinueElement.className = 'reservation-content';

            let articleContinieElement = document.createElement('article');
            articleContinieElement = article;
            liContinueElement.appendChild(articleContinieElement);

            let confirmtBtn = document.createElement('button');
            confirmtBtn.className = 'confirm-btn';
            confirmtBtn.textContent = 'Confirm';
            liContinueElement.appendChild(confirmtBtn);

            let cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';
            liContinueElement.appendChild(cancelBtn);

            liElements.remove();

            confirmList.appendChild(liContinueElement);

            confirmtBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                liContinueElement.remove();
                nextButton.disabled = false;

                verification.className = 'reservation-confirmed';
                verification.textContent = 'Confirmed.';
            }

            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {
                liContinueElement.remove();
                nextButton.disabled = false;

                verification.className = 'reservation-cancelled';
                verification.textContent = 'Cancelled.';
            }
        }
    }
}