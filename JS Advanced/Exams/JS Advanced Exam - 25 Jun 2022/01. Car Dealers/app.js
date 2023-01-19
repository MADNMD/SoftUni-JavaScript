window.addEventListener("load", solve);

function solve() {

  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const yearInput = document.getElementById('year');
  const fuelField = document.getElementById('fuel');
  const orginalPriceInput = document.getElementById('original-cost');
  const sellPriceInput = document.getElementById('selling-price');

  const tableBody = document.getElementById('table-body');
  const carList = document.getElementById('cars-list');

  const publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    if (makeInput.value === '' || modelInput.value === '' || yearInput.value === '' || fuelField.value === '' ||
      orginalPriceInput.value === '' || sellPriceInput.value === '' || orginalPriceInput.value > sellPriceInput.value) {
      return;
    }

    const tableRow = document.createElement('tr');
    tableRow.className = 'row';

    const td1 = document.createElement('td');
    td1.textContent = makeInput.value;

    const td2 = document.createElement('td');
    td2.textContent = modelInput.value;

    const td3 = document.createElement('td');
    td3.textContent = yearInput.value;

    const td4 = document.createElement('td');
    td4.textContent = fuelField.value;

    const td5 = document.createElement('td');
    td5.textContent = orginalPriceInput.value;

    const td6 = document.createElement('td');
    td6.textContent = sellPriceInput.value;

    const td7 = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';

    const sellBtn = document.createElement('button');
    sellBtn.className = 'action-btn sell';
    sellBtn.textContent = 'Sell';

    td7.appendChild(editBtn);
    td7.appendChild(sellBtn);

    tableRow.appendChild(td1);
    tableRow.appendChild(td2);
    tableRow.appendChild(td3);
    tableRow.appendChild(td4);
    tableRow.appendChild(td5);
    tableRow.appendChild(td6);
    tableRow.appendChild(td7);

    tableBody.appendChild(tableRow);

    const editMake = makeInput.value;
    const editModel = modelInput.value;
    const editYear = Number(yearInput.value);
    const editFuel = fuelField.value;
    const editOriginalPrice = Number(orginalPriceInput.value);
    const editSellPrice = Number(sellPriceInput.value);

    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelField.value = '';
    orginalPriceInput.value = '';
    sellPriceInput.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      tableRow.remove();

      makeInput.value = editMake;
      modelInput.value = editModel;
      yearInput.value = editYear;
      fuelField.value = editFuel;
      orginalPriceInput.value = editOriginalPrice;
      sellPriceInput.value = editSellPrice;
    }

    sellBtn.addEventListener('click', onSell);

    function onSell() {

      const liElement = document.createElement('li');
      liElement.className = 'each-list';

      const span1 = document.createElement('span');
      span1.textContent = `${editMake} ${editModel}`;

      const span2 = document.createElement('span');
      span2.textContent = editYear;

      const span3 = document.createElement('span');
      span3.id = 'setPrice';
      const difference = editSellPrice - editOriginalPrice;
      span3.textContent = difference;

      liElement.appendChild(span1);
      liElement.appendChild(span2);
      liElement.appendChild(span3);

      carList.appendChild(liElement);

      tableRow.remove();

      const profit = document.getElementById('profit');
      let totalPRofit = 0
      Array.from(document.querySelectorAll('#setPrice'))
        .forEach((car) => totalPRofit += Number(car.textContent));
      profit.textContent = totalPRofit.toFixed(2);
    }
  }
}