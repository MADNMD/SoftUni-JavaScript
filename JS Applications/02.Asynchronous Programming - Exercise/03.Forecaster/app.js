function attachEvents() {

    const inputLocation = document.getElementById('location');
    const divElementCurent = document.createElement('div');
    const divElementUpcoming = document.createElement('div');

    document.getElementById('submit').addEventListener('click', () => {
        getForecast(inputLocation.value);
    });

    async function getForecast(name) {

        const forcecastDiv = document.getElementById('forecast');
        forcecastDiv.style.display = 'block';

        divElementCurent.className = 'forecasts';
        divElementCurent.innerHTML = '';

        divElementUpcoming.className = 'forecasts-info';
        divElementUpcoming.innerHTML = '';

        const code = await getLocationCode(name);

        const [current, upcoming] = await Promise.all([
            getCurrent(code),
            getUpcomming(code),
        ]);

        const weatherIcons = {
            sunny: '&#x2600',
            partlySunny: '&#x26C5',
            overcast: '&#x2601',
            rain: '&#x2614',
            degrees: '&#176',
        }

        // Weather for current day

        const currentConditions = document.getElementById('current');

        const spanSymbol = document.createElement('span');
        spanSymbol.className = 'condition symbol';

        const spanCondition = document.createElement('span');
        spanCondition.className = 'condition';

        const spanTown = document.createElement('span');
        spanTown.className = 'forecast-data';
        spanTown.textContent = current.name;

        const tempSpan = document.createElement('span');
        tempSpan.className = 'forecast-data';
        tempSpan.innerHTML = `${current.forecast.low}${weatherIcons.degrees}/${current.forecast.high}${weatherIcons.degrees}`;

        const weatherSpan = document.createElement('span');
        weatherSpan.className = 'forecast-data';
        weatherSpan.textContent = current.forecast.condition;

        const condition = current.forecast.condition;

        if (condition === 'Sunny') {
            spanSymbol.innerHTML = weatherIcons.sunny;

        } else if (condition === 'Partly sunny') {
            spanSymbol.innerHTML = weatherIcons.partlySunny;

        } else if (condition === 'Overcast') {
            spanSymbol.innerHTML = weatherIcons.overcast;

        } else if (condition === 'Rain') {
            spanSymbol.innerHTML = weatherIcons.rain;
        }

        spanCondition.appendChild(spanTown);
        spanCondition.appendChild(tempSpan);
        spanCondition.appendChild(weatherSpan);

        divElementCurent.appendChild(spanSymbol);
        divElementCurent.appendChild(spanCondition);

        currentConditions.appendChild(divElementCurent);
        forcecastDiv.appendChild(currentConditions);
       
        // Weather for upcoming three days

        const threeDayForecast = document.getElementById('upcoming');

        upcoming.forecast.forEach(info => {
            const upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';

            const spanIcon = document.createElement('span');
            spanIcon.className = 'symbol';

            const tempSpanUpcoming = document.createElement('span');
            tempSpanUpcoming.className = 'forecast-data';
            tempSpanUpcoming.innerHTML = `${info.low}${weatherIcons.degrees}/${info.high}${weatherIcons.degrees}`;

            const weatherSpanUpcoming = document.createElement('span');
            weatherSpanUpcoming.className = 'forecast-data';
            weatherSpanUpcoming.textContent = info.condition;

            const conditionUpcoming = info.condition;

            if (conditionUpcoming === 'Sunny') {
                spanIcon.innerHTML = weatherIcons.sunny;

            } else if (conditionUpcoming === 'Partly sunny') {
                spanIcon.innerHTML = weatherIcons.partlySunny;

            } else if (conditionUpcoming === 'Overcast') {
                spanIcon.innerHTML = weatherIcons.overcast;

            } else if (conditionUpcoming === 'Rain') {
                spanIcon.innerHTML = weatherIcons.rain;
            }

            upcomingSpan.appendChild(spanIcon);
            upcomingSpan.appendChild(tempSpanUpcoming);
            upcomingSpan.appendChild(weatherSpanUpcoming);

            divElementUpcoming.appendChild(upcomingSpan);
            threeDayForecast.appendChild(divElementUpcoming);

            forcecastDiv.appendChild(threeDayForecast);
        });
    }

    async function getLocationCode(name) {

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);

            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();

            const location = data.find(town => town.name === name);

            return location.code;

        } catch (error) {
            divElementCurent.innerHTML = '';
            divElementCurent.textContent = 'Town is not found';
        }
    }

    async function getCurrent(code) {

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);

            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();

            return data;

        } catch (error) {
            error;
        }
    }

    async function getUpcomming(code) {

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);

            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();

            return data;

        } catch (error) {
            alert(error.message);
        }
    }
}
attachEvents();
