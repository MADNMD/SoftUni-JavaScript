function drinkSorting(input) {

    let drinks = input;
    drinks.sort((a, b) => b.price - a.price);
    //drinks.sort((a, b) => a.name.localeCompare(b.name));
    drinks.forEach(element => console.log(element));
}
drinkSorting([
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "cola", price: 3.50 },
    { name: "coffee", price: 5 }]);