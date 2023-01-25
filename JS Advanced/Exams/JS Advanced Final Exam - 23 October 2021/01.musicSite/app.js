window.addEventListener('load', solve);

function solve() {

    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const allHits = document.querySelector('.all-hits-container');

    const divLikes = document.querySelector('.likes');
    const divSaves = document.querySelector('.saved-container');

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if (genreInput.value === '' || nameInput.value === '' || authorInput.value === '' || dateInput.value === '') {
            return
        }

        const divHitsInfo = document.createElement('div');
        divHitsInfo.className = 'hits-info';

        const img = document.createElement('img');
        img.src = './static/img/img.png';

        const h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genreInput.value}`;

        const h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${nameInput.value}`;

        const h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${authorInput.value}`;

        const h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${dateInput.value}`;

        const saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';

        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        divHitsInfo.appendChild(img);
        divHitsInfo.appendChild(h2Genre);
        divHitsInfo.appendChild(h2Name);
        divHitsInfo.appendChild(h2Author);
        divHitsInfo.appendChild(h3Date);
        divHitsInfo.appendChild(saveBtn);
        divHitsInfo.appendChild(likeBtn);
        divHitsInfo.appendChild(deleteBtn);

        allHits.appendChild(divHitsInfo);

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        likeBtn.addEventListener('click', onLike);

        function onLike() {

            let totalLike = divLikes.firstElementChild;
            let likes = totalLike.textContent.slice(-1);
            likes++;
            totalLike.textContent = `Total Likes: ${likes}`;
            likeBtn.disabled = true;
        }

        saveBtn.addEventListener('click', onSave);

        function onSave() {

            divHitsInfo.removeChild(saveBtn);
            divHitsInfo.removeChild(likeBtn);

            divSaves.appendChild(divHitsInfo);
        }

        deleteBtn.addEventListener('click', onDelete);

        function onDelete() {
             divHitsInfo.remove(); 
        }
    }
}