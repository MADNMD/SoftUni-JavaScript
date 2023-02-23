window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysInput = document.getElementById('days-count');
    const nextStepBtn = document.getElementById('next-btn');

    const ticketListInfo = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const mainDiv = document.getElementById('main');
    const body = document.getElementById('body');

    nextStepBtn.addEventListener('click', onNextStep);

    function onNextStep(event) {
        event.preventDefault();

        if (firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            peopleCountInput.value === '' ||
            fromDateInput.value === '' ||
            daysInput.value === '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.className = 'ticket';

        const article = document.createElement('article');

        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `From date: ${fromDateInput.value}`;

        const pDays = document.createElement('p');
        pDays.textContent = `For ${daysInput.value} days`;

        const pPeople = document.createElement('p');
        pPeople.textContent = `For ${peopleCountInput.value} people`;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';

        article.appendChild(h3Name);
        article.appendChild(pDate);
        article.appendChild(pDays);
        article.appendChild(pPeople);
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        ticketListInfo.appendChild(liElement);

        nextStepBtn.disabled = true;

        const editFirstName = firstNameInput.value;
        const editLastName = lastNameInput.value;
        const editPeopleCount = peopleCountInput.value;
        const editFromDate = fromDateInput.value;
        const editDays = daysInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysInput.value = '';

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            liElement.remove();

            firstNameInput.value = editFirstName;
            lastNameInput.value = editLastName;
            peopleCountInput.value = editPeopleCount;
            fromDateInput.value = editFromDate;
            daysInput.value = editDays;
            nextStepBtn.disabled = false;
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {

            liElement.remove();

            const liConfirmElement = document.createElement('li');
            liConfirmElement.className = 'ticket';

            const articleConfirm = document.createElement('article');

            const h3NameConfirm = document.createElement('h3');
            h3NameConfirm.textContent = `Name: ${editFirstName} ${editLastName}`;

            const pDateConfirm = document.createElement('p');
            pDateConfirm.textContent = `From date: ${editFromDate}`;

            const pDaysConfirm = document.createElement('p');
            pDaysConfirm.textContent = `For ${editDays} days`;

            const pPeopleConfirm = document.createElement('p');
            pPeopleConfirm.textContent = `For ${editPeopleCount} people`;

            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn';
            confirmBtn.textContent = 'Confirm';

            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = 'Cancel';

            articleConfirm.appendChild(h3NameConfirm);
            articleConfirm.appendChild(pDateConfirm);
            articleConfirm.appendChild(pDaysConfirm);
            articleConfirm.appendChild(pPeopleConfirm);
            liConfirmElement.appendChild(articleConfirm);
            liConfirmElement.appendChild(confirmBtn);
            liConfirmElement.appendChild(cancelBtn);
            confirmTicket.appendChild(liConfirmElement);

            cancelBtn.addEventListener('click', onCancel);

            function onCancel() {
                liConfirmElement.remove();
                nextStepBtn.disabled = false;
            }

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                mainDiv.remove();

                const h1 = document.createElement('h1');
                h1.id = 'thank-you';
                h1.textContent = 'Thank you, have a nice day!';

                const backBtn = document.createElement('button');
                backBtn.id = 'back-btn';
                backBtn.textContent = 'Back';

                body.appendChild(h1);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', onBack);

                function onBack() {
                    h1.remove();
                    backBtn.remove();
                    liConfirmElement.remove();
                    body.appendChild(mainDiv);
                    nextStepBtn.disabled = false;
                }
            }
        }
    }
}