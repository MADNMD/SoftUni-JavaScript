function tournamentOfChristmas(input) {

    let tournamentDay = Number(input[0]);
    let money = 0;
    let win = 0;
    let lose = 0;
    let dayWin = 0;
    let dayLose = 0;
    let totalMoney = 0;

    index = 1;
    let command = input[index];

    for (let i = 1; i <= tournamentDay; i++) {

        money = 0;
        win = 0;
        lose = 0;

        while (command !== 'Finish') {
            let game = input[index++];
            let winOrLose = input[index];


            if (winOrLose === 'win') {
                win++;
                money += 20;
            } else if (winOrLose === 'lose') {
                lose++;
            }
            index++;
            command = input[index];

            if (command === 'Finish') {
                if (win > lose) {
                    dayWin++;
                    money *= 1.10;
                    totalMoney += money;
                } else if (lose > win) {
                    dayLose++;
                    totalMoney += money;
                }
            }
        }
        index++;
        command = input[index];
    }
    if (dayWin > dayLose) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournamentOfChristmas([
    "2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish",
    "golf", "win", "tennis", "win", "badminton", "win", "Finish"]);