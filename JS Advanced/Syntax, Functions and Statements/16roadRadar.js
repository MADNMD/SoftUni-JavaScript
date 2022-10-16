function roadRadar(num, str) {

    let currentSpeed = num;
    const area = str;
    let speedLimit = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (currentSpeed > speedLimit) {
                difference = currentSpeed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (currentSpeed > speedLimit) {
                difference = currentSpeed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'city':
            speedLimit = 50;
            if (currentSpeed > speedLimit) {
                difference = currentSpeed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (currentSpeed > speedLimit) {
                difference = currentSpeed - speedLimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
            }
            break;
    }
}
roadRadar(40, 'city');