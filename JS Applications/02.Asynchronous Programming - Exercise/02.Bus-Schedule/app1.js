function solve() {

    const displayBusStation = document.querySelector('span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let station = {
        next: 'depot',
    }

    function depart() {

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${station.next}`)
            .then(promise)
            .then(stationInfo)
            .catch(errorHanlde)

        function promise(response) {
            if (response.ok === false) {
                throw new Error();
            }
            return response.json();
        }
        function stationInfo(data) {
            departBtn.disabled = true;
            station = JSON.parse(JSON.stringify(data))
            displayBusStation.textContent = `Next stop ${station.name}`;
            arriveBtn.disabled = false;
        }
        function errorHanlde(error) {
            displayBusStation.textContent = 'Error';
        }
    }
    function arrive() {
        displayBusStation.textContent = `Arriving at ${station.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();