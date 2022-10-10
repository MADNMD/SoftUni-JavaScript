function basketballTournament(input) {

    let index = 0;
    let nameTournament = input[index];
    let diffPoints = 0;
    let allMachCounter = 0;
    let winCounter = 0;
    let lossCounter = 0;

    while (nameTournament !== 'End of tournaments') {
        let machCounter = 0;
        let mach = Number(input[++index]);
        for (let i = 1; i <= mach; i++) {
            machCounter++;
            let homePoints = Number(input[++index]);
            let guestPoints = Number(input[++index]);

            if (homePoints > guestPoints) {
                winCounter++;
                diffPoints = homePoints - guestPoints;
                console.log(`Game ${machCounter} of tournament ${nameTournament}: win with ${diffPoints} points.`);
            } else if (guestPoints > homePoints) {
                lossCounter++;
                diffPoints = guestPoints - homePoints;
                console.log(`Game ${machCounter} of tournament ${nameTournament}: lost with ${diffPoints} points.`);
            }
        }
        index++;
        nameTournament = input[index];
        allMachCounter += machCounter;
    }
    let percentWin = winCounter / allMachCounter * 100;
    let percentLoss = lossCounter / allMachCounter * 100;

    if (nameTournament === 'End of tournaments') {
        console.log(`${percentWin.toFixed(2)}% matches win`);
        console.log(`${percentLoss.toFixed(2)}% matches lost`);
    }
}
basketballTournament([
    "Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34",
    "83", "98", "66", "45", "End of tournaments"]);