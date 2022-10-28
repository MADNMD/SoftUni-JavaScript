function theBiscuitFactory(input) {

    const biscuitsPerADay = Number(input.shift());
    const employees = Number(input.shift());
    const days = 30;
    const otherFactory = Number(input.shift());
    let dayCount = 0;
    let biscuitsFor30Days = 0


    for (let i = 0; i < days; i++) {
        dayCount++;
        let biscuitsOneDay = 0

        if (dayCount % 3 === 0) {
            biscuitsOneDay = (biscuitsPerADay * employees) * 0.75;
            biscuitsOneDay = Math.trunc(biscuitsOneDay);
        } else {
            biscuitsOneDay = biscuitsPerADay * employees;
            biscuitsOneDay = Math.trunc(biscuitsOneDay);
        }
        biscuitsFor30Days += biscuitsOneDay;
    }
    console.log(`You have produced ${biscuitsFor30Days} biscuits for the past month.`)
    let difference = 0;
    let percentage = 0;

    if (biscuitsFor30Days > otherFactory) {
        difference = biscuitsFor30Days - otherFactory;
        percentage = (difference / otherFactory) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);

    } else if (otherFactory > biscuitsFor30Days) {
        difference = otherFactory - biscuitsFor30Days;
        percentage = (difference / otherFactory) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }
}
theBiscuitFactory(["78", "8", "16000"]);

theBiscuitFactory(["65",
    "12",
    "26000"]);