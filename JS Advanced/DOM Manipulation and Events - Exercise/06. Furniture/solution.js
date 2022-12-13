function solve() {

  const buttons = document.querySelectorAll('button');
  const textareas = document.querySelectorAll('textarea');
  const table = document.querySelector('tbody');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {

    let inputArray = JSON.parse(textareas[0].value);

    inputArray.forEach((furniture) => {

      let tableRow = document.createElement('tr')

      let tableD1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      tableD1.appendChild(img);
      tableRow.appendChild(tableD1);

      let tableD2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = furniture.name;
      tableD2.appendChild(p1);
      tableRow.appendChild(tableD2);

      let tableD3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(furniture.price);
      tableD3.appendChild(p2);
      tableRow.appendChild(tableD3);

      let tableD4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(furniture.decFactor);
      tableD4.appendChild(p3);
      tableRow.appendChild(tableD4);

      let tableD5 = document.createElement('td');
      let inputField = document.createElement('input');
      inputField.type = 'checkbox';
      tableD5.appendChild(inputField);
      tableRow.appendChild(tableD5);

      table.appendChild(tableRow);
    });
  }
  function buy() {

    const boughtFurniture = [];
    let totapPrice = 0;
    let avrDecFactor = 0;

    const checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(checkbox => checkbox.checked);
    checkboxes.forEach(checkbox => {
      let parent = checkbox.parentElement.parentElement;
      let info = Array.from(parent.querySelectorAll('p'));
      boughtFurniture.push(info[0].textContent);
      totapPrice += Number(info[1].textContent);
      avrDecFactor += Number(info[2].textContent);
    });
    textareas[1].value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totapPrice.toFixed(2)}\nAverage decoration factor: ${avrDecFactor / boughtFurniture.length}`;
  }
}