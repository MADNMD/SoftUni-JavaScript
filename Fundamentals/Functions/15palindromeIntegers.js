function palindromeIntegers(array) {

    let arrayL = array.length;

    let isPalindrom = (num) => {
        let startNum = num;
        let palindromNum = Number(num.toString().split('').reverse().join(''));

        if (startNum === palindromNum) {
            return 'true';
        } else {
            return 'false';
        }
    }

    for (let i = 0; i < arrayL; i++) {
        let currentNum = array[i];
        console.log(isPalindrom(currentNum));
    }
}
palindromeIntegers([123, 323, 421, 121]);



//--------------------------------------------------------------------

    // let arrayL = array.length;
    // let palindromNum;

    // for (let i = 0; i < arrayL; i++) {
    //     let currentNum = array[i];
    //     palindromNum = Number(currentNum.toString().split('').reverse().join(''));
    //     if (currentNum === palindromNum) {
    //         console.log('true');
    //     } else {
    //         console.log('false');
    //     }
    // }