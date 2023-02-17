function solve() {

   const authorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');
   const createBtn = document.querySelector('.btn.create');

   const archiveSection = document.querySelector('ol')

   const postsSection = document.querySelector('main section');

   createBtn.addEventListener('click', onCreate);

   function onCreate(event) {
      event.preventDefault();

      const article = document.createElement('article');

      const h1 = document.createElement('h1');
      h1.textContent = titleInput.value;

      const pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';

      const strongCategory = document.createElement('strong');
      strongCategory.textContent = categoryInput.value;

      const pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';

      const strongCreator = document.createElement('strong');
      strongCreator.textContent = authorInput.value;

      const pContent = document.createElement('p');
      pContent.textContent = contentInput.value;

      const divButtons = document.createElement('div');
      divButtons.className = 'buttons';

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';

      const archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';

      pCategory.appendChild(strongCategory);
      pCreator.appendChild(strongCreator);
      divButtons.appendChild(deleteBtn);
      divButtons.appendChild(archiveBtn);
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(divButtons);

      postsSection.appendChild(article);

      const title = titleInput.value;

      authorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

      deleteBtn.addEventListener('click', onDelete);

      function onDelete() {
         article.remove();
      }

      archiveBtn.addEventListener('click', onArchive);

      function onArchive() {

         article.remove();

         const liElement = document.createElement('li');
         liElement.textContent = title;
         archiveSection.appendChild(liElement);

         const sortedTitle = Array.from(document.querySelectorAll('li'));
         sortedTitle
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(element => archiveSection.appendChild(element));
      }
   }
}