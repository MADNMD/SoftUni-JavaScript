function solve() {

    const inputName = document.querySelector('input[placeholder="Name"]');
    const inputHall = document.querySelector('input[placeholder="Hall"]');
    const inputTicketPrice = document.querySelector('input[placeholder="Ticket Price"]');
    const onScreenBtn = document.querySelector('#container button');

    const ulElements = document.querySelector('#movies ul');
    const ulArchiveElements = document.querySelector('#archive ul');

    const clearBtn = document.querySelector('#archive button');

    onScreenBtn.addEventListener('click', event => {
        event.preventDefault();

        if (inputName.value === '' || inputHall.value === '' || inputTicketPrice.value === '' || !Number(inputTicketPrice.value) || inputTicketPrice.value === '0') {
            return;
        }

        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        spanElement.textContent = inputName.value;
        liElement.appendChild(spanElement);

        const strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${inputHall.value}`;
        liElement.appendChild(strongElement);

        const divElement = document.createElement('div');

        const divStrongElement = document.createElement('strong');
        divStrongElement.textContent = Number(inputTicketPrice.value).toFixed(2);
        divElement.appendChild(divStrongElement);

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = 'Tickets Sold';
        divElement.appendChild(inputElement);

        const buttonArchive = document.createElement('button');
        buttonArchive.textContent = 'Archive';
        divElement.appendChild(buttonArchive);

        liElement.appendChild(divElement);
        ulElements.appendChild(liElement);

        inputName.value = '';
        inputHall.value = '';
        inputTicketPrice.value = '';

        buttonArchive.addEventListener('click', event => {
            event.preventDefault();

            if (!Number(inputElement.value) || inputElement === '0') {
                return
            }

            const totalAmaount = Number(inputElement.value) * Number(divStrongElement.textContent);

            const liArchiveElement = document.createElement('li');

            const spanArchiveElement = document.createElement('span');
            spanArchiveElement.textContent = spanElement.textContent;
            liArchiveElement.appendChild(spanArchiveElement);

            const strongArchiveElement = document.createElement('strong');
            strongArchiveElement.textContent = `Total amount: ${totalAmaount.toFixed(2)}`;
            liArchiveElement.appendChild(strongArchiveElement);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            liArchiveElement.appendChild(deleteBtn);

            ulArchiveElements.appendChild(liArchiveElement);
            ulElements.removeChild(liElement);

            deleteBtn.addEventListener('click', event => {
                event.preventDefault();

                ulArchiveElements.removeChild(liArchiveElement);

            });

            clearBtn.addEventListener('click', event => {
                event.preventDefault();

                ulArchiveElements.removeChild(liArchiveElement);

            });
        });
    });
}