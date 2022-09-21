function valueOfAString(input) {
    let sum = 0;
    let word = input
        .shift()
        .split('')
        .filter(el => el.charCodeAt(el) >= 65 || el.charCodeAt(el) <= 90 || el.charCodeAt(el) >= 97 || el.charCodeAt(el) <= 122);
    let instruction = input.shift();
    if (instruction === 'LOWERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
        for (let char of word) {
            char = char.charCodeAt(0);
            sum += char;
        }
    } else if (instruction === 'UPPERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);
        for(let char of word){
            char = char.charCodeAt(0);
            sum += char;
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);