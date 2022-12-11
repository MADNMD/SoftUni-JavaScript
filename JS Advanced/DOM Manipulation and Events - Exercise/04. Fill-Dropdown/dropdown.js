function addItem() {

    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.text = newText.value;
    option.value = newValue.value;

    const menu = document.getElementById('menu');
    menu.appendChild(option);

    newText.value = '';
    newValue.value = '';
}