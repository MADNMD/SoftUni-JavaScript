function solve() {

    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const listOfMails = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', onAdd);
    resetBtn.addEventListener('click', onReset);

    function onReset() {
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }

    function onAdd(event) {
        event.preventDefault();

        if (recipientInput.value === '' || titleInput.value === '' || messageInput.value === '') {
            return;
        }

        const liElement = document.createElement('li');

        const h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleInput.value}`;

        const h4Recipient = document.createElement('h4');
        h4Recipient.textContent = `Recipient Name: ${recipientInput.value}`;

        const spanEl = document.createElement('span');
        spanEl.textContent = messageInput.value;

        const div = document.createElement('div');
        div.id = 'list-action';

        const sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        liElement.appendChild(h4Title);
        liElement.appendChild(h4Recipient);
        liElement.appendChild(spanEl);
        liElement.appendChild(div);

        listOfMails.appendChild(liElement);

        const sentRecipient = recipientInput.value;
        const sentTitle = titleInput.value;

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';

        sendBtn.addEventListener('click', onSend);

        function onSend() {

            liElement.remove();

            const liSentMailEl = document.createElement('li');

            const spanRecipientEl = document.createElement('span');
            spanRecipientEl.textContent = `To: ${sentRecipient}`;

            const spanTitleEl = document.createElement('span');
            spanTitleEl.textContent = `Title: ${sentTitle}`;

            const divBtn = document.createElement('div');
            divBtn.className = 'btn';

            const deleteBtn2 = document.createElement('button');
            deleteBtn2.type = 'submit';
            deleteBtn2.className = 'delete';
            deleteBtn2.textContent = 'Delete';

            divBtn.appendChild(deleteBtn2);

            liSentMailEl.appendChild(spanRecipientEl);
            liSentMailEl.appendChild(spanTitleEl);
            liSentMailEl.appendChild(divBtn);

            sentList.appendChild(liSentMailEl);

            deleteBtn2.addEventListener('click', onDeleteSent);

            function onDeleteSent() {

                liSentMailEl.remove();

                const liSentDelete = document.createElement('li');

                const spanSentDelete = document.createElement('span');
                spanSentDelete.textContent = `To: ${sentRecipient}`;

                const spanSentDelete2 = document.createElement('span');
                spanSentDelete2.textContent = `Title: ${sentTitle}`;

                liSentDelete.appendChild(spanSentDelete);
                liSentDelete.appendChild(spanSentDelete2);

                deleteList.appendChild(liSentDelete);
            }
        }
        deleteBtn.addEventListener('click', onDelete);

        function onDelete() {

            liElement.remove();

            const liListDelete = document.createElement('li');

            const spanListDelete = document.createElement('span');
            spanListDelete.textContent = `To: ${sentRecipient}`;

            const spanListDelete2 = document.createElement('span');
            spanListDelete2.textContent = `Title: ${sentTitle}`;

            liListDelete.appendChild(spanListDelete);
            liListDelete.appendChild(spanListDelete2);

            deleteList.appendChild(liListDelete);
        }
    }
}
solve()