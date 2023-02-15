window.addEventListener('load', solution);

function solution() {

  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postCodeInput = document.getElementById('code');

  const previewSection = document.getElementById('infoPreview');
  const blockDiv = document.getElementById('block');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');



  submitBtn.addEventListener('click', onSubmit);

  function onSubmit() {

    if (fullNameInput.value === '' || emailInput.value === '') {
      return;
    }

    const liFullName = document.createElement('li');
    liFullName.textContent = `Full Name: ${fullNameInput.value}`;

    const liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${emailInput.value}`;

    const liPhoneNumber = document.createElement('li');
    liPhoneNumber.textContent = `Phone Number: ${phoneInput.value}`;

    const liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${addressInput.value}`;

    const liPostCode = document.createElement('li');
    liPostCode.textContent = `Postal Code: ${postCodeInput.value}`;

    previewSection.appendChild(liFullName);
    previewSection.appendChild(liEmail);
    previewSection.appendChild(liPhoneNumber);
    previewSection.appendChild(liAddress);
    previewSection.appendChild(liPostCode);

    const editFullName = fullNameInput.value;
    const editEmail = emailInput.value;
    const editPhoneNumber = phoneInput.value;
    const editAddress = addressInput.value;
    const editPostCode = postCodeInput.value;

    fullNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    postCodeInput.value = '';

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      fullNameInput.value = editFullName;
      emailInput.value = editEmail;
      phoneInput.value = editPhoneNumber;
      addressInput.value = editAddress;
      postCodeInput.value = editPostCode;

      previewSection.innerHTML = '';
    }

    continueBtn.addEventListener('click', onContinue);

    function onContinue() {

      blockDiv.innerHTML = '';

      const h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';

      blockDiv.appendChild(h3);
    }
  }
}