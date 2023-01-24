class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500,
        };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {

        let isRegistred = this.listOfParticipants.find(participant => participant.name === name);

        if (isRegistred) {
            return `The ${name} is already registered at the camp.`;
        }

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (condition === 'child') {
            if (this.priceForTheCamp.child > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
        } else if (condition === 'student') {
            if (this.priceForTheCamp.student > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
        } else if (condition === 'collegian') {
            if (this.priceForTheCamp.collegian > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {

        let participant = this.listOfParticipants.find(partner => partner.name === name);
        let participantIndex = this.listOfParticipants.findIndex(partner => partner.name === name);

        if (participant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(participantIndex, 1);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {

        let firstParticipant = this.listOfParticipants.find(partner => partner.name === participant1);
        let secondParticipant = this.listOfParticipants.find(partner => partner.name === participant2);

        if (typeOfGame === 'WaterBalloonFights') {
            if (firstParticipant === undefined || secondParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (firstParticipant.condition !== secondParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (firstParticipant.power > secondParticipant.power) {

                firstParticipant.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;

            } else if (secondParticipant.power > firstParticipant.power) {

                secondParticipant.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;

            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame === 'Battleship') {

            if (firstParticipant === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }
            firstParticipant.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }
    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        let participantSorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        participantSorted.forEach(participant => {
            result += `\n${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`;
        });
        return result;
    }
}
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// Output 1
// The money is not enough to pay the stay at the camp.
// The Petar Petarson was successfully registered.
// The Petar Petarson is already registered at the camp.
// Uncaught Error: Unsuccessful registration at the camp.

// Input 2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// Output 2
// The Petar Petarson was successfully registered.
// Uncaught Error: The Petar is not registered in the camp.
// The Petar Petarson removed successfully.

// Input 3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// Output 3
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.

// Input 4
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


// Output 4
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0
