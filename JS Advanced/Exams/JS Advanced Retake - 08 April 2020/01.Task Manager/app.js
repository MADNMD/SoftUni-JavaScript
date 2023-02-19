function solve() {

    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add');

    const allSection = document.querySelectorAll('section');

    addBtn.addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();

        if (taskInput.value === '' || descriptionInput.value === '' || dateInput.value === '') {
            return;
        }

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = taskInput.value;

        const pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${descriptionInput.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${dateInput.value}`;

        const divButtons = document.createElement('div');
        divButtons.className = 'flex';

        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.textContent = 'Delete';

        divButtons.appendChild(startBtn);
        divButtons.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(divButtons);

        const orangeSection = allSection[1].children[1];
        orangeSection.appendChild(article);

        const progresTask = taskInput.value;
        const progresDescrption = descriptionInput.value;
        const progresDate = dateInput.value;

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

        startBtn.addEventListener('click', onStart);
        deleteBtn.addEventListener('click', deleteOpenSection);

        const progresSection = allSection[2].children[1];

        function deleteOpenSection() {
            article.remove();
        }

        function onStart() {

            article.remove();

            const progresArticle = document.createElement('article');

            const h3 = document.createElement('h3');
            h3.textContent = progresTask;

            const pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${progresDescrption}`;

            const pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${progresDate}`;


            const newDivButtons = document.createElement('div');
            newDivButtons.className = 'flex';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            deleteBtn.textContent = 'Delete';

            const finishBtn = document.createElement('button');
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';

            newDivButtons.appendChild(deleteBtn);
            newDivButtons.appendChild(finishBtn);
            progresArticle.appendChild(h3);
            progresArticle.appendChild(pDescription);
            progresArticle.appendChild(pDate);
            progresArticle.appendChild(newDivButtons);
            progresSection.appendChild(progresArticle);

            finishBtn.addEventListener('click', onFinish);
            deleteBtn.addEventListener('click', deleteInProgresSection);

            const completeSection = allSection[3].children[1];

            function onFinish() {
                newDivButtons.remove();
                completeSection.appendChild(progresArticle);
            }

            function deleteInProgresSection() {
                progresArticle.remove();
            }
        }
    }
}