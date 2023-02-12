window.addEventListener('load', solve);

function solve() {

    const form = document.querySelector('form');
    form.addEventListener('submit', onNext);

    const reservationList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const editForm = [];

    function onNext(event) {
        event.preventDefault();

        const formData = new FormData(form);

        const registerForm = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            checkIn: formData.get('date-in'),
            checkOut: formData.get('date-out'),
            numberOfPeople: formData.get('people-count'),
            // nextBtn: formData.get('next-btn')
        }

        const allInfo = formData.values();

        if (Object.values(registerForm).some(field => field === '') || registerForm.checkIn >= registerForm.checkOut) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.className = 'reservation-content';

        const article = document.createElement('article');

        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${registerForm.firstName}`;

        const pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${registerForm.checkIn}`;

        const pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${registerForm.checkOut}`;

        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${registerForm.numberOfPeople} people`;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);
        article.appendChild(pPeople);
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        reservationList.appendChild(liElement);

        for (let element of form) {
            if (element.tagName === 'BUTTON') {
                element.disabled = true;
            }
        }

        form.reset();

        editBtn.addEventListener('click', onEdit);

        function onEdit() {


            for (let info of allInfo) {
                editForm.push(info);
            };

            document.getElementById('first-name').value = editForm[0];
            document.getElementById('last-name').value = editForm[1];
            document.getElementById('date-in').value = editForm[2];
            document.getElementById('date-out').value = editForm[3];
            document.getElementById('people-count').value = editForm[4];

            liElement.remove();

            for (let element of form) {
                if (element.tagName === 'BUTTON') {
                    element.disabled = false;
                }
            }
        }
        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            liElement.remove();

            const liReservation = document.createElement('li');
            liReservation.className = 'reservation-content';

            const article = document.createElement('article');

            const h3Name = document.createElement('h3');
            h3Name.textContent = `Name: ${editForm[0]}`;

            const pFromDate = document.createElement('p');
            pFromDate.textContent = `From date: ${editForm[1]}`;

            const pToDate = document.createElement('p');
            pToDate.textContent = `To date: ${editForm[2]}`;

            const pPeople = document.createElement('p');
            pPeople.textContent = `For ${editForm[3]} people`;

            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            article.appendChild(h3Name);
            article.appendChild(pFromDate);
            article.appendChild(pToDate);
            article.appendChild(pPeople);
            liReservation.appendChild(article);
            liReservation.appendChild(confirmBtn);
            liReservation.appendChild(cancelBtn);
            confirmList.appendChild(liReservation);

            confirmBtn.addEventListener('click', onConfirm);

            const verification = document.getElementById('verification');

            function onConfirm(){
                liReservation.remove();

                for (let element of form) {
                    if (element.tagName === 'BUTTON') {
                        element.disabled = false;
                    }
                }
                verification.className = 'reservation-confirmed';
                verification.textContent = 'Confirmed.';

            }

            cancelBtn.addEventListener('click', onCancel);

            function onCancel(){
                liReservation.remove();

                for (let element of form) {
                    if (element.tagName === 'BUTTON') {
                        element.disabled = false;
                    }
                }
                verification.className = 'reservation-cancelled';
                verification.textContent = 'Cancelled.';
            }
        }
    }
}