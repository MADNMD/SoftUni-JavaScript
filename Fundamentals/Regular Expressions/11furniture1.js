function furniture(input) {

    const paterrn = />>(?<types>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
    console.log('Bought furniture:');
    let totalPrice = 0;

    let match = paterrn.exec(input);

    while (match !== null) {

        const nameOfFurniture = match.groups.types;
        totalPrice += Number(match.groups.price) * Number(match.groups.quantity);
        console.log(nameOfFurniture);

        match = paterrn.exec(input);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);