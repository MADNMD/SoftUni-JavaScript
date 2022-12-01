function mirrorWords(input) {

    const stringArray = input.slice();
    const string = stringArray[0];
    const pattern = /([@\|#])(?<words1>[A-Za-z]{3,})\1\1(?<words2>[A-Za-z]{3,})/g;
    const mirrorWords = [];
    let wordsCounter = 0;

    let matchs = string.matchAll(pattern);

    for (let match of matchs) {
        wordsCounter++;
        let firstWord = match.groups.words1;
        let secondWord = match.groups.words2;
        let tempWord = secondWord.split('').reverse().join('');

        if (firstWord === tempWord) {
            mirrorWords.push(firstWord + ' <=> ' + secondWord);
        }
    }
    if (wordsCounter !== 0) {
        console.log(`${wordsCounter} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if (mirrorWords.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
//mirrorWords(['#po0l##l0op#@bAc##cAB@@LM@ML@#xxxXxx##xxxXxx#@aba@@ababa@']);
//mirrorWords(['#lol#lol#@#God@@doG@##abC@@Cba#@Xyu@#uyX#']);