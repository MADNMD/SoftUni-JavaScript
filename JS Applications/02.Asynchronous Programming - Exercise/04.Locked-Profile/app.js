async function lockedProfile() {

    const response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles`);
    const data = await response.json();
    const mainDiv = document.getElementById('main');
    const templateProfil = document.querySelector('.profile');
    templateProfil.remove();

    for (let person in data) {
    
        const divProfile = document.createElement('div');
        divProfile.setAttribute('class', 'profile');

        const img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.setAttribute('class', 'userIcon');

        const labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        const inputLock = document.createElement('input');
        inputLock.type = 'radio';
        inputLock.name = `user${data[person]._id}Locked`;
        inputLock.value = 'lock';
        inputLock.checked = true;

        const labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        const inputUnlock = document.createElement('input');
        inputUnlock.type = 'radio';
        inputUnlock.name = `user${data[person]._id}Locked`;
        inputUnlock.value = 'unlock';

        // const br = document.createElement('br');
        // const hr = document.getElementById('hr');

        const labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${data[person]._id}Username`;
        inputUsername.value = `${data[person].username}`;
        inputUsername.readOnly = true;
        inputUsername.disabled = true;

        const hiddenDiv = document.createElement('div');
        hiddenDiv.id = `${data[person]._id}`;
        hiddenDiv.style.display = 'none';

        const hr2 = document.createElement('hr');

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${data[person]._id}Email`;
        inputEmail.value = `${data[person].email}`;
        inputEmail.readOnly = true;
        inputEmail.disabled = true;

        const lableAge = document.createElement('lable');
        lableAge.textContent = 'Age:';

        const inputAge = document.createElement('input');
        inputAge.type = 'email';
        inputAge.name = `user${data[person].age}Age`;
        inputAge.value = `${data[person].age}`;
        inputAge.readOnly = true;
        inputAge.disabled = true;

        const button = document.createElement('button');
        button.textContent = 'Show more';
        button.addEventListener('click', onShow);

        divProfile.appendChild(img);
        divProfile.appendChild(labelLock);
        divProfile.appendChild(inputLock);
        divProfile.appendChild(labelUnlock);
        divProfile.appendChild(inputUnlock);
        // inputUnlock.appendChild(br);
        // inputUnlock.appendChild(hr);
        divProfile.appendChild(labelUsername);
        divProfile.appendChild(inputUsername);
        // hiddenDiv.appendChild(hr2);
        hiddenDiv.appendChild(labelEmail);
        hiddenDiv.appendChild(inputEmail);
        hiddenDiv.appendChild(lableAge);
        hiddenDiv.appendChild(inputAge);
        divProfile.appendChild(hiddenDiv);
        divProfile.appendChild(button);
        mainDiv.appendChild(divProfile);
    }

    function onShow(event) {

        const profile = event.target.parentElement;
        // const radioBtn = profile.querySelector('input[type="radio"]:checked');
        const isActive = profile.querySelector('input[value="unlock"]').checked
        const hiddenFieldDiv = event.target.previousElementSibling;
    
        if(isActive){
            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                hiddenFieldDiv.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                hiddenFieldDiv.style.display = 'none';
            }
        }
        
        // const showMoerBtn = event.target;
    
        // if (radioBtn.value !== 'unlock') {
        //     return;
        // }

        // showMoerBtn.textContent = showMoerBtn.textContent === 'Show more'
        //     ? 'Hide it'
        //     : 'Show more';

        // hiddenFieldDiv.style.display = hiddenFieldDiv.style.display === 'block'
        //     ? 'none'
        //     : 'block';
    }
}