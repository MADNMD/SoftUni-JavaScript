function easterDecoration(input) {

    let peopleInShop = Number(input[0]);
    //let purchasesCounter = 0;
    let totalPrice = 0;
    let avergePrice = 0;
    //let price = 0;
    let index = 0;
    let command = input[index];

    for (let i = 1; i <= peopleInShop; i++) {
        let productCounter = 0;
        let price = 0;
        index++;
        command = input[index];
        while (command !== 'Finish') {
            let product = input[index];
            productCounter++;
            switch (product) {
                case 'basket': price += 1.5; break;
                case 'wreath': price += 3.8; break;
                case 'chocolate bunny': price += 7; break;
            }
            index++;
            command = input[index];
        }
        if (productCounter % 2 === 0) {
            price *= 0.80;
        }
        totalPrice += price;
        console.log(`You purchased ${productCounter} items for ${price.toFixed(2)} leva.`);
    }
    console.log(`Average bill per client is: ${(totalPrice / peopleInShop).toFixed(2)} leva.`);
}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);