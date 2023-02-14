class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        products.forEach(infoProduct => {
            let [product, quantity, price] = infoProduct.split(' ');
            price = Number(price);
            quantity = Number(quantity);

            if (this.budgetMoney >= price) {
                this.budgetMoney -= price;
                this.history.push(`Successfully loaded ${quantity} ${product}`);
                if (!this.stockProducts.hasOwnProperty(product)) {
                    this.stockProducts[product] = quantity;
                } else {
                    this.stockProducts[product] += quantity;
                }
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
        });
        return this.history.join('\n');
    }
    addToMenu(meal, neededProducts, price) {

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            neededProducts.forEach(product => {
                const [name, quantity] = product.split(' ');
                this.menu[meal][name] = Number(quantity);
            });
            this.menu[meal].price = Number(price);
            const numberOfMealsOfTheMenu = Object.keys(this.menu).length;
            if (numberOfMealsOfTheMenu === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else if (numberOfMealsOfTheMenu === 0 || numberOfMealsOfTheMenu >= 2) {
                return `Great idea! Now with the ${meal} we have ${numberOfMealsOfTheMenu} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }
    showTheMenu() {

        const allMeals = [];

        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        } else {
            for (let meal in this.menu) {
                allMeals.push(`${meal} - $ ${this.menu[meal].price}`);
            }
            return allMeals.join('\n');
        }
    }
    makeTheOrder(meal) {

        let hasAllProducts = true;

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            for (let product in this.menu[meal]) {
                if (!this.stockProducts.hasOwnProperty(product) || this.stockProducts[product] < this.menu[meal][product]) {
                    hasAllProducts = false;
                } else {
                    this.stockProducts[product] -= this.menu[meal][product];
                    this.budgetMoney += this.menu[meal].price;
                    hasAllProducts = true;
                }
            }
        }
        if (hasAllProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// Output 1
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

// Input 2
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// Output 2
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?

// Input 3
// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// Output 3
// frozenYogurt - $ 9.99
// Pizza - $ 15.55

// Input 4
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

// Output 4
// Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.