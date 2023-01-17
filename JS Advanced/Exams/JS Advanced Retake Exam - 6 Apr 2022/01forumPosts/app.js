window.addEventListener("load", solve);

function solve() {

  const titleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const contentInput = document.getElementById('post-content');
  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');

  const publishBtn = document.getElementById('publish-btn');

  publishBtn.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    if (titleInput.value === '' || categoryInput.value === '' || contentInput.value === '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'rpost';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = titleInput.value;

    const p1 = document.createElement('p');
    p1.textContent = `Category: ${categoryInput.value}`;

    const p2 = document.createElement('p');
    p2.textContent = `Content: ${contentInput.value}`;

    const editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';

    const approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);

    reviewList.appendChild(liElement);

    const editTitle = titleInput.value;
    const editCategory = categoryInput.value;
    const editContent = contentInput.value;

    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit() {

      liElement.remove();

      titleInput.value = editTitle;
      categoryInput.value = editCategory;
      contentInput.value = editContent;
    }

    approveBtn.addEventListener('click', onApprove);

    function onApprove() {

      liElement.removeChild(editBtn);
      liElement.removeChild(approveBtn);
      publishedList.appendChild(liElement);
    }

    const clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click', onClear);

    function onClear() {
      liElement.remove();
    }
  }
}