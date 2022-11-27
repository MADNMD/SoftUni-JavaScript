function addItem(){

    const inputElement = document.getElementById('newItemText');
    const itemsElements = document.getElementById('items');

    const newLiElement = document.createElement('li');

    newLiElement.textContent = inputElement.value;

    itemsElements.appendChild(newLiElement);
    inputElement.value = '';

}




























// function addItem() {

//     const inputElement = document.getElementById('newItemText');
//     const itemsElements = document.getElementById('items');

//     const newLiElement = document.createElement('li');

//     newLiElement.textContent = inputElement.value;

//     itemsElements.appendChild(newLiElement);
//     inputElement.value = '';
// }   