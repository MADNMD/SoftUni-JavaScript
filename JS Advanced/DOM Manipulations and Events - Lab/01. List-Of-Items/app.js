function addItem() {

    const inputElement = document.getElementById('newItemText');
    const itemsElements = document.getElementById('items');

    const newLiElement = document.createElement('li');

    newLiElement.textContent = inputElement.value;

    if (inputElement.value !== '') {

        itemsElements.appendChild(newLiElement);
    }
    inputElement.value = '';
}   
