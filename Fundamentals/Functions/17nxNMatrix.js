function nxNMatrix(numberN) {

    const rowGeneration = () => {                 
        let output = '';                          //
        for (let i = 0; i < numberN; i++) {       //
            output += `${numberN} `;              //           return `${numberN} `.repeat(numberN);
        }                                         //
        return output;                            // 
    }
    for (let j = 0; j < numberN; j++) {
        console.log(rowGeneration(numberN));
    }
}
nxNMatrix(7);


//----------------------------------------------

// for (let i = 0; i < numberN; i++) {
//     let output = '';
//     for (let j = 0; j < numberN; j++) {
//         output += `${numberN} `;
//     }
//     console.log(output);
// }