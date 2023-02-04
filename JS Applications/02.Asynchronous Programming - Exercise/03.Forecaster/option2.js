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

    function onWeather(event) {
        divElementCurent.innerHTML = '';
        divElementUpcoming.innerHTML = '';

        divElementCurent.className = 'forecasts';
        divElementUpcoming.className = 'forecasts-info';

        forcecastDiv.style.display = 'block';

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then((response) => response.json())
            .then(townInfo)
            
        function townInfo(data) {
            data.forEach((town) => {
                if (town.name === locationInput.value) {
                    code = town.code
                }
            });
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                .then((response) => response.json())
                .then(setDayweather)
                .catch((error) => console.log(error))

            function setDayweather(townData) {
                const spanSymbol = document.createElement('span');
                spanSymbol.className = 'condition symbol';

                const spanCondition = document.createElement('span');
                spanCondition.className = 'condition';

                const spanTown = document.createElement('span');
                spanTown.className = 'forecast-data';
                spanTown.textContent = townData.name;

                const tempSpan = document.createElement('span');
                tempSpan.className = 'forecast-data';
                tempSpan.innerHTML = `${townData.forecast.low}${weatherIcons.degrees}/${townData.forecast.high}${weatherIcons.degrees}`;

                const weatherSpan = document.createElement('span');
                weatherSpan.className = 'forecast-data';
                weatherSpan.textContent = townData.forecast.condition;

                const condition = townData.forecast.condition;

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
            }
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                .then((response) => response.json())
                .then(setThreeDaysWeather)

            function setThreeDaysWeather(upcomingData) {
                let nextDays = upcomingData.forecast;
                nextDays.forEach((dayInfo) => {
                    const upcomingSpan = document.createElement('span');
                    upcomingSpan.className = 'upcoming';

                    const spanIcon = document.createElement('span');
                    spanIcon.className = 'symbol';

                    const tempSpan = document.createElement('span');
                    tempSpan.className = 'forecast-data';
                    tempSpan.innerHTML = `${dayInfo.low}${weatherIcons.degrees}/${dayInfo.high}${weatherIcons.degrees}`;

                    const weatherSpan = document.createElement('span');
                    weatherSpan.className = 'forecast-data';
                    weatherSpan.textContent = dayInfo.condition;

                    const condition = dayInfo.condition;

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
            }
        }
    }
}
attachEvents();