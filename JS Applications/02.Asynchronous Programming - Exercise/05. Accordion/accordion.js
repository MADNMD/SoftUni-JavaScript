async function solution() {

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const response = await fetch(url);
    const data = await response.json();
    const mainSection = document.getElementById('main');
    console.log(data);
    data.forEach(accordion => {

        const divAccordion = document.createElement('div');
        divAccordion.setAttribute('class', 'accordion');

        const divHead = document.createElement('div');
        divHead.setAttribute('class', 'head');

        const span = document.createElement('span');
        span.textContent = accordion.title;

        const button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.id = accordion._id;
        button.textContent = 'More';

        const divExtra = document.createElement('div');
        divExtra.setAttribute('class', 'extra');

        const p = document.createElement('p');

        button.addEventListener('click', moreOrLess);

        async function moreOrLess() {
            const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${accordion._id}`);
            const data = await response.json();

            p.textContent = data.content;

            if (button.textContent === 'More') {
                button.textContent = 'Less';
                divExtra.style.display = 'block';
            } else {
                button.textContent = 'More';
                divExtra.style.display = 'none';
            }
        }
        divExtra.appendChild(p);
        divHead.appendChild(button);
        divHead.appendChild(span);
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);
        mainSection.appendChild(divAccordion)
    });
}
solution() 