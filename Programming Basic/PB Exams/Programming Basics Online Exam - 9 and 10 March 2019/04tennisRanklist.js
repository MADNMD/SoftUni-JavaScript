function tennisRanklist(input) {

    let tournament = Number(input[0]);
    let pointsInRanglist = Number(input[1]);
    let points = pointsInRanglist;
    let winCountert = 0;


    for (let i = 2; i <= input.length; i++) {
        let result = input[i];

        switch (result) {
            case 'W':
                winCountert++;
                points += 2000;
                break;
            case 'F':
                points += 1200;
                break;
            case 'SF':
                points += 720;
                break;
        }
    }
    let totalPoints = (points - pointsInRanglist) / tournament;
    let percentWin = winCountert / tournament * 100

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(totalPoints)}`);
    console.log(`${percentWin.toFixed(2)}%`);
}
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);