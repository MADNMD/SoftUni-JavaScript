function replaceRepeatingChars(input) {
    let result = '';
    for (let letter of input) {
        if (letter !== result[result.length - 1]) {
            result += letter;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');