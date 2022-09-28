function spiceMustFlow(input) {
    let spicesOfADays = input;
    let dayCount = 0;
    let yield = 0;

    while (spicesOfADays >= 100) {
        dayCount++;
        yield += spicesOfADays - 26;
        spicesOfADays -= 10;
    }
    yield -= 26;
    if (yield < 0) {
        yield = 0;
    }
    console.log(dayCount);
    console.log(yield);
}
spiceMustFlow(450);