function fancyBarcodes(input) {

    let barCodes = Number(input.shift());
    const regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let i = 0; i < barCodes; i++) {
        let currentBarCode = input.shift();
        let match = regex.exec(currentBarCode);
        let code = '';
        if (match) {
            let barCode = match.groups.product;
            barCode = barCode.split('');
            let barCodeL = barCode.length;
            for (let i = 0; i < barCodeL; i++) {
                let currentChar = barCode[i];
                if (currentChar.charCodeAt() >= 48 && currentChar.charCodeAt() <= 57) {
                    code += currentChar;
                }
            }
            if (code !== '') {
                console.log(`Product group: ${code}`);
            } else {
                console.log('Product group: 00');
            }
        } else if (match === null) {
            console.log("Invalid barcode");
        }
    }
}
// fancyBarcodes([
//     "6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"]);
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);