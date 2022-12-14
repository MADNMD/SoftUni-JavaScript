function furniture(input) {

    let totalSum = 0;
    console.log('Bought furniture:');
    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }
        let pattern = />>(?<productName>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)\b/g;
        let match = pattern.exec(line);
        if (match) {
            totalSum += +match.groups.price * +match.groups.quantity;
            let product = match.groups.productName;
            console.log(`${product}`);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);