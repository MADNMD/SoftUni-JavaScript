function modernTimesOfHashTag(input) {

    let text = input.split(' ');
    let result = [];
    for (let word of text) {
        if (word.startsWith('#') && word.length > 1) {
            result.push(word.substring(1));
        }
    }
    let finalResult = [];
    for (let word of result) {
        let currentWord = word.split('');
        let currentWordL = currentWord.length;
        let flag = true;
        for (let i = 0; i < currentWordL; i++) {
            let currentChar = currentWord[i];
            if(!isNaN(currentChar)){
                flag = false;
            }
        }
        if (flag) {
            finalResult.push(word);
        }
    }
    finalResult.forEach(word => console.log(word));
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
