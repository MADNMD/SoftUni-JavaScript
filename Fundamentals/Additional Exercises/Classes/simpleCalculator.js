class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    Add(){
        let result = this.num1 + this.num2;
        return result;
    }
    Subtract(){
        let result = this.num1 - this.num2;
        return result;
    }
    Multiply(){
        let result = this.num1 * this.num2;
        return result;
    }
    Divide(){
        let result = this.num1 / this.num2;
        return result;
    }
}
let calculator = new Calculator(10, 5);
calculator.Add(calculator);
calculator.Subtract(calculator);
calculator.Multiply(calculator);
calculator.Divide(calculator);
console.log(calculator.Add());
console.log(calculator.Subtract());
console.log(calculator.Multiply());
console.log(calculator.Divide());