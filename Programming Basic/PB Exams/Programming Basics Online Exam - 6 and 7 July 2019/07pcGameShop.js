function pcGameShop(input) {

    let soldGame = Number(input[0]);
    let HearthstoneCounter = 0;
    let ForniteCounter = 0;
    let OverwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 1; i < input.length; i++) {
        let gameName = input[i];

        if (gameName === 'Hearthstone') {
            HearthstoneCounter++;
        } else if (gameName === 'Fornite') {
            ForniteCounter++;
        } else if (gameName === 'Overwatch') {
            OverwatchCounter++;
        } else {
            othersCounter++
        }
    }
    console.log(`Hearthstone - ${(HearthstoneCounter * 100 / soldGame).toFixed(2)}%`);
    console.log(`Fornite - ${(ForniteCounter * 100 / soldGame).toFixed(2)}%`);
    console.log(`Overwatch - ${(OverwatchCounter * 100 / soldGame).toFixed(2)}%`);
    console.log(`Others - ${(othersCounter * 100 / soldGame).toFixed(2)}%`);
}
pcGameShop([
    "4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);