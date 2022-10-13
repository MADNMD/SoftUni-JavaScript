function trekkingMania(input) {

    let groupOfPeople = Number(input[0]);
    let peopleCounter = 0;
    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimandjaroCountre = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    for (let i = 1; i <= groupOfPeople; i++) {

        let people = Number(input[i]);
        peopleCounter += people;

        if (people <= 5) {
            musalaCounter += people;
        } else if (people <= 12) {
            monblanCounter += people;
        } else if (people <= 25) {
            kilimandjaroCountre += people;
        } else if (people <= 40) {
            k2Counter += people;
        } else if (people >= 41) {
            everestCounter += people;
        }
    }
    let p1 = musalaCounter / peopleCounter * 100;
    let p2 = monblanCounter / peopleCounter * 100;
    let p3 = kilimandjaroCountre / peopleCounter * 100;
    let p4 = k2Counter / peopleCounter * 100;
    let p5 = everestCounter / peopleCounter * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);