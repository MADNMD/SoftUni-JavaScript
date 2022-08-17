function blackFlag(array) {

    let piratingDays = Number(array.shift());
    let dailyPlunder = Number(array.shift());
    let expectedPlunder = Number(array.shift());
    let totalPlunder = 0;

    for (let i = 1; i <= piratingDays; i++) {
        let currentDay = i;
        totalPlunder += dailyPlunder;
        if (currentDay % 3 === 0) {
            let additionalPlunder = dailyPlunder / 2;
            totalPlunder += additionalPlunder;
        }
        if (currentDay % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);

    } else {
        let percent = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10", "20", "380"]);