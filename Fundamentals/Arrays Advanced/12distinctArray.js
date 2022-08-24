function distinctArray(input) {

    let newArray = [];
    for (let number of input) {
        if (!newArray.includes(number)) {
            newArray.push(number);
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

//---------------------------------------------

  // let newArray = input.filter((a,b) => input.indexOf(a) === b);
    // console.log(newArray.join(' '));

    //----------------------------------------------

    // let inputL = input.length;
    // let result = [];

    // for (let i = 0; i < inputL; i++) {
    //     let currentDigit = input[i];
    //     for (let j = i + 1; j < inputL; j++) {
    //         let nextDigit = input[j];
    //         if (currentDigit === nextDigit) {
    //             input.splice(j, 1);
    //             j--;
    //         }
    //     }
    // }
    // console.log(input.join(' '));