function toggle() {

    const button = document.querySelector('span');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        button.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}