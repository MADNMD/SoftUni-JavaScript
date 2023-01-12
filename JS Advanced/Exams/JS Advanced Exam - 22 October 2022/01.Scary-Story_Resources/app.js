window.addEventListener("load", solve);

function solve() {

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitleInput = document.getElementById('story-title');
  const genreOption = document.getElementById('genre');
  const storyText = document.getElementById('story');

  const publishBtn = document.getElementById('form-btn');

  const previewList = document.getElementById('preview-list');

  publishBtn.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    if (
      firstNameInput.value === '' ||
      lastNameInput.value === '' ||
      ageInput.value === '' ||
      storyTitleInput.value === '' ||
      storyText.value === ''
    ) {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'story-info';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

    const p1 = document.createElement('p');
    p1.textContent = `Age: ${ageInput.value}`;

    const p2 = document.createElement('p');
    p2.textContent = `Title: ${storyTitleInput.value}`;

    const p3 = document.createElement('p');
    p3.textContent = `Genre: ${genreOption.value}`;

    const p4 = document.createElement('p');
    p4.textContent = `${storyText.value}`;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';


    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    liElement.appendChild(article);

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewList.appendChild(liElement);
    publishBtn.disabled = true;

    let editFirstName = firstNameInput.value;
    let editLastName = lastNameInput.value;
    let editAge = ageInput.value;
    let editStoryTitle = storyTitleInput.value;
    let editStoryText = storyText.value;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    storyText.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      firstNameInput.value = editFirstName;
      lastNameInput.value = editLastName;
      ageInput.value = editAge;
      storyTitleInput.value = editStoryTitle;
      storyText.value = editStoryText;

      liElement.remove();
      publishBtn.disabled = false;
    }

    saveBtn.addEventListener('click', onSave);

    function onSave() {
      const mainDiv = document.getElementById('main');
      const formWrapper = document.querySelector('.form-wrapper');
      const sideWrapper = document.querySelector('#side-wrapper');

      const h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';

      mainDiv.appendChild(h1);

      formWrapper.remove();
      sideWrapper.remove();
    }

    deleteBtn.addEventListener('click', onDelete);

    function onDelete() {

      liElement.remove();
      publishBtn.disabled = false
    }
  }
}