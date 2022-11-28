function deleteByEmail() {

    const inputElement = document.querySelector('input[name="email"]');
    const emailCellElements = document.querySelectorAll('tr td:nth-of-type(even)');
    const resultElement = document.getElementById('result');

    const arrayEmails = Array.from(emailCellElements);
    const targetEmail = arrayEmails.find(email => email.textContent === inputElement.value);

    if (targetEmail) {
        targetEmail.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    inputElement.value = '';
}