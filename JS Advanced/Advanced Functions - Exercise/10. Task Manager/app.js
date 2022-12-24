function solve() {

    const input = {
        task: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    }

    const [addSection, openSection, inProgressSection, completeSection] = Array.from(document.querySelectorAll('Section'))
    .map(element => element.children[1]);

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event){
        event.preventDefault();

         if(input.task.value === '' || input.description.value === '' || input.date.value === ''){
        return;
    }

        const article = document.createElement('article');

        article.appendChild(createElement('h3', input.task.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));

        const div = createElement('div', '', 'flex');

        const startBtn = createElement('button', 'Start', 'green');
        div.appendChild(startBtn);

        const deleteBtn = createElement('button', 'Delete', 'red');
        div.appendChild(deleteBtn);

        const finishBtn = createElement('button', 'Finish', 'orange');

        article.appendChild(div);

        openSection.appendChild(article);

        Object.values(input).forEach(input => input.value = '');

        startBtn.addEventListener('click', clickStart);
        deleteBtn.addEventListener('click', clickDelete);
        finishBtn.addEventListener('click', clickFinish);

        function clickStart(){
            startBtn.remove();
            div.appendChild(finishBtn);
            inProgressSection.appendChild(article);
        }
        function clickDelete(){
            article.remove();
        }
        function clickFinish(){
            div.remove();
            completeSection.appendChild(article);
        }
    }

    function createElement(type, content, className){

        const element = document.createElement(type);
        element.textContent = content;
        if(className){
            element.className = className
        }
            return element;
    }
}