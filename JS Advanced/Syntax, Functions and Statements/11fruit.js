function fruit(string, num1, num2) {

    const product = string;
    let weightInGrams = num1;
    const pricePerKg = num2;

    const weightInKg = weightInGrams / 1000;
    const totalMoney = weightInKg * pricePerKg;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${product}.`);
}
fruit('orange', 2500, 1.80);