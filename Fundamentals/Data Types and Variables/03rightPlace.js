function rightPlace(word, char, result){
    let newWord = word.replace('_', char);
    let output = newWord === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
rightPlace('Str_ng', 'o', 'Strong');