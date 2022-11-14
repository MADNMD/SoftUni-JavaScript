function pascalCaseSplitter(input) {

    let result = '';

    for (let letter of input) {

        if (letter === letter.toUpperCase()) {
            result += ', ';
            result += letter;
        } else {
            result += letter;
        }
    }
    if (result.startsWith(',')) {
        const index = result.indexOf(',');
        result = result.substring(index + 1);
    }
    console.log(result.trim());
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');