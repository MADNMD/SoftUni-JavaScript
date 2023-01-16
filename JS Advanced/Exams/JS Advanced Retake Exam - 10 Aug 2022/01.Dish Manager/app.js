window.addEventListener("load", solve);

function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderType = document.getElementById('genderSelect');
  const dishDescription = document.getElementById('task');

  const inProgressField = document.getElementById('in-progress');
  const finishedField = document.getElementById('finished');

  const progressCount = document.getElementById('progress-count');

  const submitBtn = document.getElementById('form-btn');

  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    if (firstNameInput.value === '' || lastNameInput.value === '' || ageInput.value === '' || dishDescription.value === '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'each-line';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `${firstNameInput.value} ${lastNameInput.value}`;

    const p1 = document.createElement('p');
    p1.textContent = `${genderType.value}, ${ageInput.value}`;

    const p2 = document.createElement('p');
    p2.textContent = `Dish description: ${dishDescription.value}`;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark as complete';

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);
    inProgressField.appendChild(liElement);

    const editFirstName = firstNameInput.value;
    const editLastName = lastNameInput.value;
    const editAge = ageInput.value;
    const editDescription = dishDescription.value;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    dishDescription.value = '';

    progressCount.textContent = Number(progressCount.textContent) + 1;

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      dishDescription.value = editDescription;
      progressCount.textContent = Number(progressCount.textContent) - 1;

      liElement.remove();
    }

    completeBtn.addEventListener('click', onComplete);

    function onComplete() {

      liElement.removeChild(editBtn);
      liElement.removeChild(completeBtn);
      inProgressField.removeChild(liElement);
      finishedField.appendChild(liElement);

      progressCount.textContent = Number(progressCount.textContent) - 1;
    }

    const clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click', onClear);

    function onClear() {
      finishedField.textContent = '';
    }
  }
}