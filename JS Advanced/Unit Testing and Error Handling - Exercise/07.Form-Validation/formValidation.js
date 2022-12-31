function validate() {

    const userNamePattern = /^[a-zA-Z0-9]{3,20}$/g;
    const passwordPattern = /^\w{5,15}$/g;
    const emailPattern = /^.*@.*\..*$/g;;
    const companyPattern = /^[0-9]{4}$/g;

    const inputUserName = document.getElementById('username');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const inputConfirmPassword = document.getElementById('confirm-password');
    const inputCompanyNumber = document.getElementById('companyNumber');

    let isValid = true;

    const checkBox = document.getElementById('company');
    checkBox.addEventListener('change', () => {
        const companyInfo = document.getElementById('companyInfo');

        if (checkBox.checked === false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    });

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();

        if (!userNamePattern.test(inputUserName.value)) {
            inputUserName.style.borderColor = 'red';
            isValid = false;
        } else {
            inputUserName.style.border = 'none';
        }

        if (!emailPattern.test(inputEmail.value)) {
            inputEmail.style.borderColor = 'red';
            isValid = false;
        } else {
            inputEmail.style.border = 'none';
        }

        if (!passwordPattern.test(inputPassword.value) || inputPassword.value !== inputConfirmPassword.value || inputConfirmPassword.value === '') {
            inputPassword.style.borderColor = 'red';
            inputConfirmPassword.style.borderColor = 'red';
            isValid = false;
        } else {
            inputPassword.style.border = 'none';
            inputConfirmPassword.style.border = 'none';
        }

        if (checkBox.checked) {
            if (!companyPattern.test(inputCompanyNumber.value) || inputCompanyNumber.value < 1000) {
                inputCompanyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                inputCompanyNumber.style.border = 'none';
            }
        }

        const divValid = document.getElementById('valid');

        if (isValid) {
            divValid.style.display = 'block';
        } else {
            divValid.style.display = 'none';
        }
    }
}