function depositCalculator(input) {

    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let yearPercent = Number(input[2]);
    let depositOrYearPercent = deposit * (yearPercent / 100);
    let interest = depositOrYearPercent / 12;
    let totallAll = deposit + (period * interest);

    console.log(totallAll)
}
depositCalculator(["200 ","3 ","5.7 "]);