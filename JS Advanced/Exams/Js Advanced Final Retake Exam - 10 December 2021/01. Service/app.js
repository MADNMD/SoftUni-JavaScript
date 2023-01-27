window.addEventListener('load', solve);

function solve() {

    const productTypeInput = document.getElementById('type-product');
    const problemInput = document.getElementById('description');
    const nameIput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    const [sendBtn, clearBtn] = Array.from(document.querySelectorAll('button'));

    sendBtn.addEventListener('click', OnSend);

    function OnSend(event) {
        event.preventDefault();

        if (problemInput.value === '' || nameIput.value === '' || phoneInput.value === '') {
            return
        }

        const divElement = document.createElement('div');
        divElement.className = 'container';

        const h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${productTypeInput.value}`;

        const h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${nameIput.value}, ${phoneInput.value}`;

        const h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${problemInput.value}`;

        const startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.disabled = true;
        finishBtn.textContent = 'Finish repair';

        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(startBtn);
        divElement.appendChild(finishBtn);

        receivedOrders.appendChild(divElement);

        problemInput.value = '';
        nameIput.value = '';
        phoneInput.value = ''

        startBtn.addEventListener('click', onStart);

        function onStart() {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        finishBtn.addEventListener('click', onFinish);

        function onFinish() {
            divElement.removeChild(startBtn);
            divElement.removeChild(finishBtn);
            completedOrders.appendChild(divElement);
        }

        clearBtn.addEventListener('click', onClear);

        function onClear() {
            completedOrders.removeChild(divElement);
        }
    }
}