function fiftyThirtyTwentyStrategy(input){

    let budget = [input];
    let needs = Number(budget[0]) / 2;
    let wants = Number(budget[0]) / 100 * 30;
    let savings = Number(budget[0]) / 100 * 20;
    let distributionOfMoney = {
        Needs: needs,
        Wants: wants,
        Savings: savings,
    }
    console.log(distributionOfMoney);
}
fiftyThirtyTwentyStrategy(13450);