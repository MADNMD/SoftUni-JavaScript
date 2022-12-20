function calculator() {

    let firtstInput;
    let secondInput;
    let result;

    function init(selector1, selector2, resultSelector) {

        firtstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        result = document.querySelector(resultSelector);

    }

    function add() {
        result.value = Number(firtstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        result.value = Number(firtstInput.value) - Number(secondInput.value);
    }

    return {
        init,
        add,
        subtract
    }

}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 