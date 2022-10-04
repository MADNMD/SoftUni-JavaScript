function vacation(input) {

    let tripTarget = Number(input[0]);
    let budget = Number(input[1]);
    let index = 2;
    let command = input[index];
    let spendDays = 0;
    let totalDays = 0;

    while (tripTarget > budget) {
        totalDays++;
        index++;

        if (command === 'spend') {
            spendDays++

            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(`${totalDays}`);
                break;
            }
            let spendMoney = Number(input[index]);
            budget -= spendMoney;

            if (budget < 0) {
                budget = 0;
            }
        } else if (command === 'save') {
            spendDays = 0;
            let saveMoney = Number(input[index]);
            budget += saveMoney;
        }
        index++;
        command = input[index];
    }
    if (budget >= tripTarget) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);