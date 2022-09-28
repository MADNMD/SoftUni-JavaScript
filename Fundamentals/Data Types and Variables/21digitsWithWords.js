function digitsWithWords(string) {
    let numberAsString = string;
    let zero = () => console.log(0);
    let one = () => console.log(1);
    let two = () => console.log(2);
    let three = () => console.log(3);
    let four = () => console.log(4);
    let five = () => console.log(5);
    let six = () => console.log(6);
    let seven = () => console.log(7);
    let eigth = () => console.log(8);
    let nine = () => console.log(9);
    switch (numberAsString) {
        case 'zero': zero(); break;
        case 'one': one(); break;
        case 'two': two(); break;
        case 'three': three(); break;
        case 'four': four(); break;
        case 'five': five(); break;
        case 'six': six(); break;
        case 'seven': seven(); break;
        case 'eight': eigth(); break;
        case 'nine': nine(); break;
    }
}
digitsWithWords('two');