function triplesOfLatinLetters(numStr) {
    let number = Number(numStr);
    for (let i = 0; i < number; i++) {
        let letter = String.fromCharCode(97 + i);
        for (let j = 0; j < number; j++) {
            let letter2 = String.fromCharCode(97 + j);
            for (let k = 0; k < number; k++) {
                let letter3 = String.fromCharCode(97 + k);
                console.log(`${letter}${letter2}${letter3}`);
            }
        }
    }
}
triplesOfLatinLetters('3');