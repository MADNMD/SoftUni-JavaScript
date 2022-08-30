function buildAWall(input) {
    let parsNum = input.map(Number)
    let parsNumL = parsNum.length;
    let crews = parsNum.filter(x => x < 30).length;
    let cost = 0;
    let totalConcrete = 0;
    let dailyCOncrete = [];

    while (crews !== 0) {
        let concreteAllCrew = 0;
        for (let i = 0; i < parsNumL; i++) {
            //let currentDay = parsNum[i];
            if (parsNum[i] !== 30) {
                parsNum[i]++;
                concreteAllCrew += 195;
                if (parsNum[i] === 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteAllCrew;
        dailyCOncrete.push(concreteAllCrew);
    }
    cost = totalConcrete * 1900;
    console.log(dailyCOncrete.join(', '));
    console.log(`${cost} pesos`);
}
buildAWall([21, 25, 28]);