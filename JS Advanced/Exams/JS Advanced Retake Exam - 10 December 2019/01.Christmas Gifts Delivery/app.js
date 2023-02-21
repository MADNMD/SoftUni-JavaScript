function solution() {
   
    const allSecton = Array.from(document.querySelectorAll('.card ul'));
    const giftInput = document.querySelector('input');
    const addGiftBtn = document.querySelector('button');
    addGiftBtn.addEventListener('click', onAdd);

    function onAdd(){
        
        const liElement = document.createElement('li');
        liElement.className = 'gift';
        liElement.textContent = giftInput.value;

        const sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';

        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        
        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);
        allSecton[0].appendChild(liElement);

        const sortingGift = Array.from(document.querySelectorAll('.gift'))
        sortingGift
        .sort((a,b) => a.textContent.localeCompare(b.textContent))
        .forEach(gift => allSecton[0].appendChild(gift));

        giftInput.value = '';

        sendBtn.addEventListener('click', onSend);

        function onSend(){
            sendBtn.remove();
            discardBtn.remove();
            liElement.className = '';
            allSecton[1].appendChild(liElement);
        }

        discardBtn.addEventListener('click', onDiscard);

        function onDiscard(){
            sendBtn.remove();
            discardBtn.remove();
            liElement.className = '';
            allSecton[2].appendChild(liElement);
        }
    }
}