class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let player = {};
        let result = [];
        for (let playerInfo of footballPlayers) {

            let [name, age, value] = playerInfo.split('/');
            age = Number(age);
            value = Number(value);

            if (!player.hasOwnProperty(name)) {
                player[name] = { age, value };
            } else {
                if (value > player[name].value) {
                    player[name].value = value;
                }
            }
        }
        this.invitedPlayers.push(player);

        for (let players of this.invitedPlayers) {
            for (let player in players) {
                result.push(player);
            }
        }
        return `You successfully invite ${result.join(', ')}.`;
    }
    signContract(selectedPlayer) {
        let [name, value] = selectedPlayer.split('/');
        value = Number(value);

        for (let pleyar of this.invitedPlayers) {
            if (!pleyar.hasOwnProperty(name)) {
                throw new Error(`${name} is not invited to the selection list!`);
            } else {
                if (value < pleyar[name].value) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${pleyar[name].value - value} million more are needed to sign the contract!`);
                } else {
                    pleyar[name].value = 'Bought';
                }
            }

        }
        return `Congratulations! You sign a contract with ${name} for ${Number(value)} million dollars.`;
    }
    ageLimit(name, age) {

        for (let pleyar of this.invitedPlayers) {
            if (!pleyar.hasOwnProperty(name)) {
                throw new Error(`${name} is not invited to the selection list!`);
            } else {
                if (Number(age) > Number(pleyar[name].age)) {
                    let difference = Number(age) - Number(pleyar[name].age);
                    if (difference < 5) {
                        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
                    } else if (difference > 5) {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                    }
                } else {
                    return `${name} is above age limit!`;
                }
            }
        }
    }
    transferWindowResult() {
        let result = 'Players list:';
        for (let players of this.invitedPlayers) {
            let sortedName = Object.keys(players).sort((a, b) => a.localeCompare(b));
            for (let name of sortedName) {
                result += `\nPlayer ${name}-${players[name].value}`;
            }
        }
        return result;
    }
}
// let fTeam = new FootballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));


// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());