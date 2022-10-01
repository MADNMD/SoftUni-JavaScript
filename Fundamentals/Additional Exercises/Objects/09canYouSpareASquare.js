function canYouSpareASquare(home) {
    let days = Math.floor((home.tp * 500) / 57 / home.people)
    if (days < 14) {
        console.log(`Your TP will only last ${days} days, buy more!`);
    } else {
        console.log(`Your TP will last ${days} days, no need to panic!`);
    }
}
canYouSpareASquare({ people: 4, tp: 1 });