function rounding(number1, number2) {

    if (number2 > 15) {
        number2 = 15;
    }
  let result = number1.toFixed(number2);
    console.log(Number(result));
}
rounding(3.1415926535897932384626433832795, 2);