function repeatString(string, numRepeat) {

    let finalResult = '';
    let result = function () {
        for (let i = 0; i < numRepeat; i++) {
            finalResult += string;
        }
        return finalResult;
    }
    console.log(result(finalResult));
}
repeatString("String", 2); 


//--------------------------------------------------------------
// function repeatString(string, nRepeat) {

//     let result = '';

//     for (let i = 0; i < nRepeat; i++) {
//         result += `${string}`;
//     }
//     console.log(result);
//}