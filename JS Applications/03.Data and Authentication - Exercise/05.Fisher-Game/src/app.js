window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    document.getElementById('home').classList.add('active');

    const userData = JSON.parse(sessionStorage.getItem('userData')); //ако се врънат грешни данни връща null;

    // const userEmail = document.querySelector('span');
    // userEmail.textContent = userData.email;

    const cathces = document.getElementById('catches');
    cathces.style.display = 'none';
    document.getElementById('logout').addEventListener('click', logOut);

    if (userData !== null) { // проверявам дали данни който ни е върнал sessionStorage са валидни;
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.querySelector('.load').addEventListener('click', onLoad);

    document.getElementById('addForm').addEventListener('submit', onCreate);

    async function logOut() {

        const response = await fetch(`http://localhost:3030/users/logout`);
        const data = await response.json();
        sessionStorage.clear();
        window.location = './index.html';

        return data;
    }

    async function onCreate(event) {
        event.preventDefault();

        if (!userData) {  // ако user-а го няма отиваме на началната страница;
            window.location = './login.html';
            return
        }

        const fromData = new FormData(event.currentTarget);

        const angler = fromData.get('angler');
        const weight = fromData.get('weight');
        const species = fromData.get('species');
        const location = fromData.get('location');
        const bait = fromData.get('bait');
        const captureTime = fromData.get('captureTime');

        // const data = [...fromData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

        const data = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }

        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify(data),
        }

        try {

            if (Object.values(data).some(field => field === '')) {
                throw new Error('There is an empty field')
            }

            const response = await fetch(`http://localhost:3030/data/catches`, option);

            if (response.ok !== true) {
                const error = await response.json();
                throw new Error(error.message);
            }
            event.target.reset();// изчиствам полетата с данни след като съм ги добавил;
            onLoad(); // добавям новия улов към към всички улови;
        } catch (error) {
            alert(error.message);
        }
    }

    async function onLoad() { //зарежда списъка с улови

        const response = await fetch(`http://localhost:3030/data/catches`);
        const data = await response.json();

        cathces.style.display = 'block';
        cathces.replaceChildren(...data.map(createCatch));
    }

    function createCatch(item) { // създавам новия улов който щя бъде прибавен в листа с улови

        let isOwner = (userData && item._ownerId === userData.id);
        //връща true или false. Проверявам дали имаме user ако има проверявам дали id-то на user е еднакво с id-то на някой от уловите за да можем да update-ваме или delete-ваме;
        const div = document.createElement('div');
        div.className = 'catch';


        const labelName = document.createElement('label');
        labelName.textContent = 'Angler';

        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.className = 'angler';
        inputName.value = item.angler;
        inputName.disabled = !isOwner;

        const labelWeight = document.createElement('label');
        labelWeight.textContent = 'Weight';

        const inputWeight = document.createElement('input');
        inputWeight.type = 'text';
        inputWeight.className = 'weight';
        inputWeight.value = item.weight;
        inputWeight.disabled = !isOwner;

        const labelSpecies = document.createElement('label');
        labelSpecies.textContent = 'Species';

        const inputSpecies = document.createElement('input');
        inputSpecies.type = 'text';
        inputSpecies.className = 'species';
        inputSpecies.value = item.species;
        inputSpecies.disabled = !isOwner;

        const labelLocation = document.createElement('label');
        labelLocation.textContent = 'Location';

        const inputLocation = document.createElement('input');
        inputLocation.type = 'text';
        inputLocation.className = 'location';
        inputLocation.value = item.location;
        inputLocation.disabled = !isOwner;

        const labelBait = document.createElement('label');
        labelBait.textContent = 'Bait';

        const inputBait = document.createElement('input');
        inputBait.type = 'text';
        inputBait.className = 'bait';
        inputBait.value = item.bait;
        inputBait.disabled = !isOwner;

        const labelCaptureTime = document.createElement('label');
        labelCaptureTime.textContent = 'Capture Time';

        const inputCaptureTime = document.createElement('input');
        inputCaptureTime.type = 'text';
        inputCaptureTime.className = 'captureTime';
        inputCaptureTime.value = item.captureTime;
        inputCaptureTime.disabled = !isOwner;

        const updateBtn = document.createElement('button');
        updateBtn.className = 'update';
        updateBtn.dataset.id = item._id;
        updateBtn.disabled = !isOwner;
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', onEdit);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.dataset.id = item._id;
        deleteBtn.disabled = !isOwner;
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);

        div.appendChild(labelName);
        div.appendChild(inputName);
        div.appendChild(labelWeight);
        div.appendChild(inputWeight);
        div.appendChild(labelSpecies);
        div.appendChild(inputSpecies);
        div.appendChild(labelLocation);
        div.appendChild(inputLocation);
        div.appendChild(labelBait);
        div.appendChild(inputBait);
        div.appendChild(labelCaptureTime);
        div.appendChild(inputCaptureTime);
        div.appendChild(updateBtn);
        div.appendChild(deleteBtn);

        return div;
    }

    async function onEdit(event) {
        event.preventDefault();

        const id = event.target.dataset.id;
        const angler = event.target.parentElement.children[1].value;
        const weight = event.target.parentElement.children[3].value;
        const species = event.target.parentElement.children[5].value;
        const location = event.target.parentElement.children[7].value
        const bait = event.target.parentElement.children[9].value
        const captureTime = event.target.parentElement.children[11].value

        const data = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }
        editCatch(id, data);
    }

    async function editCatch(id, take) {

        const option = {
            method: 'put',
            headers: {
                'X-Authorization': userData.token,
            },
            body: JSON.stringify(take)
        }
        const editCatch = await fetch(`http://localhost:3030/data/catches/${id}`, option);
        return editCatch;
    }

    function onDelete(event) {

        const id = event.target.dataset.id
        cathces.removeChild(event.target.parentElement)

        deleteCatch(id);
    }

    async function deleteCatch(id) {

        const option = {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token,
            }
        }

        const deleteCurrentCatch = await fetch(`http://localhost:3030/data/catches/${id}`, option);

        return deleteCurrentCatch;
    }

});