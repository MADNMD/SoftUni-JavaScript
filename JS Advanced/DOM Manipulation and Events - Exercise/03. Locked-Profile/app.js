function lockedProfile() {

    // const buttons = document.querySelectorAll('.profile button');
    // for (let button of buttons) {                                  тук обхождам NodeList колекцията с  for of  цикъл
    //     button.addEventListener('click', onClick);
    // };

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', onClick));      // тук обръщам NodeList колекцията в масив и го интерирам с

    function onClick(event) {
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[value="unlock"]').checked;

        if (isActive) {
            const info = Array.from(profile.querySelectorAll('div'))
                .find(div => div.id.includes('HiddenFields'));

            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}
