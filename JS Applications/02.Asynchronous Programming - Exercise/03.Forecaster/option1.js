function attachEvents() {

    const locationInput = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forcecastDiv = document.getElementById('forecast');
    const currentConditions = document.getElementById('current');
    const threeDayForecast = document.getElementById('upcoming');
    const divElementCurent = document.createElement('div');
    const divElementUpcoming = document.createElement('div');
    let code = '';

    const weatherIcons = {
        sunny: '&#x2600',
        partlySunny: '&#x26C5',
        overcast: '&#x2601',
        rain: '&#x2614',
        degrees: '&#176',
    }

    getWeatherBtn.addEventListener('click', onWeather);

    async function onWeather(event) {
        event.preventDefault();

        divElementCurent.innerHTML = '';
        divElementUpcoming.innerHTML = '';

        divElementCurent.className = 'forecasts';
        divElementUpcoming.className = 'forecasts-info';

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);

            if (response.ok === false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            
            data.map(async (infoTown) => {
                if (infoTown.name === locationInput.value) {
                     code = infoTown.code; 
                }
            });
            try {
                const responseCurrentWeather = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);

                if (responseCurrentWeather.ok === false) {
                    throw new Error(`${responseCurrentWeather.status} ${responseCurrentWeather.statusText}`);
                }
                const dataTown = await responseCurrentWeather.json();

                const spanSymbol = document.createElement('span');
                spanSymbol.className = 'condition symbol';

                const spanCondition = document.createElement('span');
                spanCondition.className = 'condition';

                const spanTown = document.createElement('span');
                spanTown.className = 'forecast-data';
                spanTown.textContent = dataTown.name;

                const tempSpan = document.createElement('span');
                tempSpan.className = 'forecast-data';
                tempSpan.innerHTML = `${dataTown.forecast.low}${weatherIcons.degrees}/${dataTown.forecast.high}${weatherIcons.degrees}`;

                const weatherSpan = document.createElement('span');
                weatherSpan.className = 'forecast-data';
                weatherSpan.textContent = dataTown.forecast.condition;

                const condition = dataTown.forecast.condition;

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
                forcecastDiv.style.display = 'block';
            } catch (error) {
                divElementCurent.innerHTML = 'Error';
                currentConditions.appendChild(divElementCurent);
                forcecastDiv.style.display = 'block';
            }
            try {
                const responseUpcomingWeathe = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);

                const upcomingData = await responseUpcomingWeathe.json();

                upcomingData.forecast.map(async (info) => {

                    const upcomingSpan = document.createElement('span');
                    upcomingSpan.className = 'upcoming';

                    const spanIcon = document.createElement('span');
                    spanIcon.className = 'symbol';

                    const tempSpan = document.createElement('span');
                    tempSpan.className = 'forecast-data';
                    tempSpan.innerHTML = `${info.low}${weatherIcons.degrees}/${info.high}${weatherIcons.degrees}`;

                    const weatherSpan = document.createElement('span');
                    weatherSpan.className = 'forecast-data';
                    weatherSpan.textContent = info.condition;

                    const condition = info.condition;

                    if (condition === 'Sunny') {
                        spanIcon.innerHTML = weatherIcons.sunny;

                    } else if (condition === 'Partly sunny') {
                        spanIcon.innerHTML = weatherIcons.partlySunny;

                    } else if (condition === 'Overcast') {
                        spanIcon.innerHTML = weatherIcons.overcast;

                    } else if (condition === 'Rain') {
                        spanIcon.innerHTML = weatherIcons.rain;
                    }

                    upcomingSpan.appendChild(spanIcon);
                    upcomingSpan.appendChild(tempSpan);
                    upcomingSpan.appendChild(weatherSpan);

                    divElementUpcoming.appendChild(upcomingSpan);
                    threeDayForecast.appendChild(divElementUpcoming);
                });
            } catch (error) {
                divElementCurent.innerHTML = 'Error';
                currentConditions.appendChild(divElementCurent);
                forcecastDiv.style.display = 'block';
            }
        } catch (error) {
            divElementCurent.innerHTML = 'Error';
            currentConditions.appendChild(divElementCurent);
            forcecastDiv.style.display = 'block';
        }
    }
}
attachEvents();