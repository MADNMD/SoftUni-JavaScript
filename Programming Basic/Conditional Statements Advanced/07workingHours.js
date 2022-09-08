function workingHours(input) {

    let hours = Number(input[0]);
    let days = input[1];

    switch (days) {
        case 'Monday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Tuesday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Wednesday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Thursday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Friday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Saturday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            } break;
        case 'Sunday':
            console.log('closed'); break;
    }
    switch (days) {
        case 'Monday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Tuesday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Wednesday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Thursday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Friday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Saturday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
        case 'Sunday':
            if (hours < 10 || hours > 18) {
                console.log('closed');
            } break;
    }
}
workingHours(["11", "Monday"]);