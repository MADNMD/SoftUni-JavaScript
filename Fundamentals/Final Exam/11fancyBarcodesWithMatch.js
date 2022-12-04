function fancyBarcodes(input) {

    const arrayInput = input.slice();
    let numberOfBarcode = Number(arrayInput.shift());
    const pattern = /(@#{1,})[A-Z][A-Za-z\d]{4,}[A-Z](@#{1,})/g;

    while (numberOfBarcode > 0) {

        let line = arrayInput.shift();
        let barcode = line.match(pattern);
        let product = '';

        if (barcode !== null) {
            let splitBarcode = barcode.toString().split('');

            for (let char of splitBarcode) {

                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    product += char;
                }
            }
            if (product !== '') {
                console.log(`Product group: ${product}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }
        numberOfBarcode--;
    }
}
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);

// fancyBarcodes(
//     ["3",
//         "@#FreshFisH@#",
//         "@###Brea0D@###",
//         "@##Che4s6E@##"]);