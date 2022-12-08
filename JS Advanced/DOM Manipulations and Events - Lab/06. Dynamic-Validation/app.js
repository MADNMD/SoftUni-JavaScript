function validate() {

    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChanged);

    function onChanged(event) {

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}