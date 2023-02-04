function solve() {

    const displayBusStation = document.querySelector('span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let station = {
        next: 'depot',
    }

    async function depart() {

        departBtn.disabled = true;

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${station.next}`);

            if (response.ok === false) {
                throw new Error();
            }

            station = await response.json();
            displayBusStation.textContent = `Next stop ${station.name}`;

            arriveBtn.disabled = false;

        } catch (error) {
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