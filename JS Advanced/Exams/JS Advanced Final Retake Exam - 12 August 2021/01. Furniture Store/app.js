window.addEventListener('load', solve);

function solve() {

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);
    const furnitureList = document.getElementById('furniture-list');
    
    
    function onAdd(event) {
        event.preventDefault();
        
        const model = modelInput.value;
        const year = Number(yearInput.value);
        const description = descriptionInput.value;
        const price = Number(priceInput.value);
        
        if (model === '' || year ==='' || description === '' || price === '') {
            return;
        }
        if(Number(year) < 0 || Number(price) < 0){
            return;
        }
        
        const firstTr = document.createElement('tr');
        firstTr.className = 'info';

        const nameTd = document.createElement('td');
        nameTd.textContent = model;

        const priceTd = document.createElement('td');
        priceTd.textContent = price.toFixed(2);

        const buttonsTd = document.createElement('td');

        const MoreInfoBtn = document.createElement('button');
        MoreInfoBtn.className = 'moreBtn';
        MoreInfoBtn.textContent = 'More Info';
        MoreInfoBtn.addEventListener('click', onMore);

        const buyBtn = document.createElement('button');
        buyBtn.className = 'buyBtn';
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', onBuy);

        buttonsTd.appendChild(MoreInfoBtn);
        buttonsTd.appendChild(buyBtn);
        firstTr.appendChild(nameTd);
        firstTr.appendChild(priceTd);
        firstTr.appendChild(buttonsTd);

        const secondTr = document.createElement('tr');
        secondTr.className = 'hide';

        const yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`;

        const descriptionTd = document.createElement('td');
        descriptionTd.colSpan = 3;
        descriptionTd.textContent = `Description: ${description}`;

        secondTr.appendChild(yearTd);
        secondTr.appendChild(descriptionTd);

        furnitureList.appendChild(firstTr);
        furnitureList.appendChild(secondTr);

        modelInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
        yearInput.value = '';

        function onMore() {

            if (MoreInfoBtn.textContent === 'More Info') {
                secondTr.style.display = 'contents';
                MoreInfoBtn.textContent = 'Less Info';
            } else if (MoreInfoBtn.textContent === 'Less Info') {
                secondTr.style.display = 'none';
                MoreInfoBtn.textContent = 'More Info';
            }
        }

        function onBuy(){
            firstTr.remove();
            secondTr.remove();
            const totalPrice = document.querySelector('.total-price');
            let total = Number(totalPrice.textContent);
            total += Number(price);
            totalPrice.textContent = total.toFixed(2);
        }
    }
}