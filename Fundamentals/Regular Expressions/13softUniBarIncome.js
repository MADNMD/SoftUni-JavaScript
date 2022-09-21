function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm;
    let totalPrice = 0;
    let match = pattern.exec(input);
    while (match !== null) {
        let name = match.groups.name;
        let product = match.groups.product;
        let quantity = match.groups.quantity;
        let price = match.groups.price;
        totalPrice += quantity * price;
        console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
        match = pattern.exec(input);
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);