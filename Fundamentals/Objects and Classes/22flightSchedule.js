function flightSchedule(input) {

    let flights = {};

    let flightStatus = input.shift();
    let newFligthStatus = input.shift();
    let checkStatus = input.shift()[0];

    for (let line of flightStatus) {
        let [numFlights, ...data] = line.split(' ');
        let Destination = '';

        if (data.length > 1) {
            Destination = data[0] + ' ' + data[1];
            flights[numFlights] = { Destination, Status: 'Ready to fly' };
        } else {
            Destination = data[0];
            flights[numFlights] = { Destination, Status: 'Ready to fly' };
        }
    }
    for (let line of newFligthStatus) {
        let [numFli, status] = line.split(' ');

        if (flights.hasOwnProperty(numFli)) {
            flights[numFli].Status = status;
        }
    }
    for (let fligth in flights) {
        if (flights[fligth].Status === checkStatus) {
            console.log(flights[fligth]);
        }
    }
}
flightSchedule([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled', //texas
    'WN612 Cancelled',// alabama
    'WN1173 Cancelled', // california
    'SK430 Cancelled'],
['Cancelled']
]);

// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]
// );