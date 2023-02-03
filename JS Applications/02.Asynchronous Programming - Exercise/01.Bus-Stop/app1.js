async function getInfo() {

    const stopIdInput = document.getElementById('stopId').value;
    const busStop = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput}`;

    buses.innerHTML = '';
    stopIdInput.value = '';
    try {
        const response = await fetch(url);
        const data = await response.json();

        busStop.textContent = data.name;
        
        Object.entries(data.buses).forEach(busInfo => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${busInfo[0]} arrives in ${busInfo[1]} minutes`;
            buses.appendChild(liElement);
        });

    } catch (error) {
        busStop.textContent = 'Error';
    }
}