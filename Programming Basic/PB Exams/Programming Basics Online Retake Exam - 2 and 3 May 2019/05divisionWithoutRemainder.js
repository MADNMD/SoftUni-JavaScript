function divisionWithoutRemainder(input) {

    let num = Number(input[0]);
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    for (let i = 1; i <= num; i++) {
        let nums = Number(input[i]);

        if (nums % 2 === 0) {
            counter1++;
        }
        if (nums % 3 === 0) {
            counter2++;
        }
        if (nums % 4 === 0) {
            counter3++;
        }
    }
    let p1 = counter1 / num * 100;
    let p2 = counter2 / num * 100;
    let p3 = counter3 / num * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divisionWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);