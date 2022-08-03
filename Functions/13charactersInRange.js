function charactersInRange(character1, character2) {

    let startChar = character1.charCodeAt();
    let endChar = character2.charCodeAt();
    let smallerNum = Math.min(startChar, endChar);
    let biggerNum = Math.max(startChar, endChar);
    let finalResult = [];

    for (let i = smallerNum + 1; i < biggerNum; i++) {
        let currentEl = String.fromCharCode(i);
        finalResult.push(currentEl);
    }
    console.log(finalResult.join(' '));
}
//charactersInRange('a', 'd');
//charactersInRange('#', ':');
charactersInRange('C','#');


//-------------------------------------------------------------------------

// let startChar = character1.charCodeAt();
// let endChar = character2.charCodeAt();
// let smallerNum = Math.min(startChar, endChar);
// let biggerNum = Math.max(startChar, endChar);
// let resultFromNum = [];
// let numAsChar;
// let finalResult = [];



// for (let i = smallerNum + 1; i < biggerNum; i++) {
//     resultFromNum.push(i);
//     numAsChar = resultFromNum.shift();
//     let charSimbol = String.fromCharCode(numAsChar);
//     finalResult.push(charSimbol);
// }
// console.log(finalResult.join(' '));


//---------------------------------------------------------

//     let charAsNumber = char1.charCodeAt();
//     let charAsNumber2 = char2.charCodeAt();
//     let maxNum = Math.max(charAsNumber, charAsNumber2);
//     let minNum = Math.min(charAsNumber, charAsNumber2);
//     let allChars = [];

//     function NumbersAsChars(){
//         for (let i = minNum + 1; i < maxNum; i++) {
//             let chars = String.fromCharCode(i);
//             allChars.push(chars);
//         }
//         return allChars;
//     }

//     let finalresult = NumbersAsChars(char1, char2);
//     console.log(finalresult.join(' '));