function modernTimesOfHashTag(text) {

    const sentence = text.split(' ');
    const searchingWords = [];

    sentence.forEach(words => {
        if (words.includes('#')) {
            const index = words.indexOf('#');
            words = words.substring(index + 1);
            searchingWords.push(words)
        }
    });
   searchingWords.forEach(word => {
    if(word.length > 0 && !/[0-9]/.test(word)){
        console.log(word);
    }
   });
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
//modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');