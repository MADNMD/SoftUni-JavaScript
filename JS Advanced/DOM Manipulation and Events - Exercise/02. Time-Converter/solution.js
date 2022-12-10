function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    const template = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function convert(value, id) {

        const days = value / template[id];

        return {
            days: days,
            hours: days * template.hours,
            minutes: days * template.minutes,
            seconds: days * template.seconds,
        }

    }

    function onClick(event) {
        const input = event.target.parentElement.querySelector('input[type="text"]');
        
        const time = convert(Number(input.value), input.id);

        inputDays.value = time.days;
        inputHours.value = time.hours;
        inputMinutes.value = time.minutes;
        inputSeconds.value = time.seconds;
    }
}