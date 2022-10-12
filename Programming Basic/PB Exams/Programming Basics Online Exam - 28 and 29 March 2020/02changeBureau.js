function changeBureau(input) {
    let bitCoin = Number(input[0]);
    let yuan = Number(input[1]);
    let comission = Number(input[2]);

    comission = comission * 0.01;
    let allEuro = (yuan * 0.15 * 1.76 + bitCoin * 1168) / 1.95;
    let charge = allEuro * comission;
    let result = allEuro - charge;
    console.log(result.toFixed(2));
}
changeBureau(["1", "5", "5"]);