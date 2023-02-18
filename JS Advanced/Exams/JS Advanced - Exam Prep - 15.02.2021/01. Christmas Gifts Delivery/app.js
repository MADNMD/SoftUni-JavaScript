function solution() {

    const cardInput = document.querySelector('input');
    const addGiftBtn = document.querySelector('button');
    const listGifts = Array.from(document.querySelectorAll('.card ul'));

    addGiftBtn.addEventListener('click', onAdd);

    function onAdd() {

        const liElement = document.createElement('li');
        liElement.className = 'gift';
        liElement.textContent = cardInput.value;

        const sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';

        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        
        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);
        listGifts[0].appendChild(liElement);

        const sortedGiftName = Array.from(document.querySelectorAll('.gift'));
        sortedGiftName
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(gift => listGifts[0].appendChild(gift));

        cardInput.value = '';

        sendBtn.addEventListener('click', onSend);

        function onSend() {
            listGifts[1].appendChild(liElement);
            liElement.className = '';
            sendBtn.remove();
            discardBtn.remove();
        }

        discardBtn.addEventListener('click', onDiscard);

        function onDiscard() {
            listGifts[2].appendChild(liElement);
            liElement.className = '';
            sendBtn.remove();
            discardBtn.remove();
        }
    }
}