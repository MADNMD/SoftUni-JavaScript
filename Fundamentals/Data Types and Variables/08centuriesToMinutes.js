function centuriesToMinutes(centuries) {
    let oneCenturies = 100;
    let years = centuries * oneCenturies;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(5);