function stringSubstring(word, text){

    let wordToLowerCase = word.toLowerCase();
    let sentence = text.toLowerCase();
    let sentenceAsArray = sentence.split(' ');
    if(sentenceAsArray.includes(wordToLowerCase)){
        console.log(wordToLowerCase);
    }else{
        console.log(`${wordToLowerCase} not found!`);
        return;
    }
}
stringSubstring('python',
'JavaScript is the best programming language'
);