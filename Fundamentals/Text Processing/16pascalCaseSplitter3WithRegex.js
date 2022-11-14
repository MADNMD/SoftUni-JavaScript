function pascalCaseSplitter(input) {
    let sentence = input.split(/(?=[A-Z])/);
    console.log(sentence.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');