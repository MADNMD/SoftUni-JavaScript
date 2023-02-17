class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }
        this._budget = value;
    }

    shopping(product) {
        const [productName, productPrice] = product;

        if (this.budget < Number(productPrice)) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(productName);
            this.budget -= Number(productPrice);
            return `You have successfully bought ${productName}!`;
        }
    }

    recipes(recipe) {

        let cooking = true;

        for (let product of recipe.productsList) {
            if (!this.products.includes(product)) {
                cooking = false;
                break;
            }
        }

        if (cooking) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`;
        } else {
            throw new Error(`We do not have this product`);
        }
    }

    inviteGuests(name, dish) {

        if (this.dishes.includes(dish)) {
            throw new Error(`We do not have this dish`);
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error(`This guest has already been invited`);
        } else {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {

        const orderLists = [];

        const guests = Object.entries(this.guests);

        for (let guest of guests) {
            const [guestName, guestDish] = guest;

            const index = this.dishes.findIndex(dish => dish.recipeName === guestDish);
            const products = this.dishes[index].productsList;

            orderLists.push(`${guestName} will eat ${guestDish}, which consists of ${products.join(', ')}`);
        }
        return orderLists.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
// Corresponding output
// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt