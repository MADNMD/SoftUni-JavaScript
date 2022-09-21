function pascalCaseSplitter(input) {
    let words = [];
    for (let letter of input) {
        if (letter === letter.toUpperCase()) {
            words.push(letter);
        } else {
            words[words.length - 1] += letter;
        }
    }
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

//---------------------------------

// let sentence = input.split(/(?=[A-Z])/);
// console.log(sentence.join(', '));


//-----------------------------------------------------


    // let words = [];
    // let currentWord = input[0];
    // let text = input.length;
    // for(let i = 1; i < text; i++){
    //     if(input[i].toUpperCase() !== input[i]){
    //         currentWord = currentWord.concat(input[i]);
    //     }else{
    //         words.push(currentWord);
    //         currentWord = input[i];
    //     }
    // }
    // words.push(currentWord);
    // console.log(words.join(', '));