function easterShop(input) {

    let eggsInShop = Number(input[0]);
    let counterEgg = 0;
    let index = 1;
    let command = input[index];

    while (command !== 'Close') {
        let BuyAndFill = input[index++];
        let eggs = Number(input[index]);

        if (BuyAndFill === 'Buy') {

            if (eggs > eggsInShop) {
                console.log("Not enough eggs in store!");
                console.log(`You can buy only ${eggsInShop}.`);
                break;
            }
            counterEgg += eggs;
            eggsInShop -= eggs;
        } else if (BuyAndFill === 'Fill') {
            eggsInShop += eggs;
        }

        index++;
        command = input[index];
    }
    if (command === 'Close') {
        console.log("Store is closed!");
        console.log(`${counterEgg} eggs sold.`);
    }
}
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);