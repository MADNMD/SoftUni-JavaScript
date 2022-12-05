function addItem() {

    const input = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const newLiElement = document.createElement('li');

    if (input.value !== '') {

        newLiElement.textContent = input.value

        ulElement.appendChild(newLiElement);

        const deleteBtn = document.createElement('a');
        deleteBtn.textContent = '[Delete]';
        deleteBtn.href = '#';
        newLiElement.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', onDelete);

        function onDelete(event) {
            event.target.parentElement.remove();
        }
    }
    input.value = '';
}
