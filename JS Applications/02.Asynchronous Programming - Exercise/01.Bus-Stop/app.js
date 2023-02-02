function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const busStop = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(promise)
        .then(busesInfo)
        .catch(handleError)

    function promise(response) {
        if (response.ok === false) {
            throw new Error(`${response.status}`);
        }
        return response.json();
    }
    function busesInfo(data) {

        busStop.textContent = data.name;

        buses.innerHTML = '';

        for (let bus in data.buses) {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            buses.appendChild(liElement);
        }
    }
    function handleError(error) {
        buses.innerHTML = '';
        busStop.textContent = `Error`;
    }
}