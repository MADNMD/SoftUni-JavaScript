function easterTrip(input) {

    let destination = input[0];
    let data = input[1];
    let counterNights = Number(input[2]);

    switch (data) {
        case '21-23':
            if (destination === 'France') {
                counterNights *= 30;
                break;
            } else if (destination === 'Italy') {
                counterNights *= 28;
                break;
            } else if (destination === 'Germany') {
                counterNights *= 32;
                break;
            }
        case '24-27':
            if (destination === 'France') {
                counterNights *= 35;
                break;
            } else if (destination === 'Italy') {
                counterNights *= 32;
                break;
            } else if (destination === 'Germany') {
                counterNights *= 37;
                break;
            }
        case '28-31':
            if (destination === 'France') {
                counterNights *= 40;
                break;
            } else if (destination === 'Italy') {
                counterNights *= 39;
                break;
            } else if (destination === 'Germany') {
                counterNights *= 43;
                break;
            }
    }
    console.log(`Easter trip to ${destination} : ${counterNights.toFixed(2)} leva.`);
}
easterTrip(["Italy", "21-23", "7"]);