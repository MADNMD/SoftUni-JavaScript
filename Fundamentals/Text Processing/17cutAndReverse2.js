function cutAndReverse(input) {

    let text = input.split('').reverse();
    let textL = text.length / 2;
    let firtstHalfText = '';
    let secondHalfText = '';
    const result = [];

    for (let i = 0; i < textL; i++) {
        firtstHalfText += text[i];
        secondHalfText += text[textL + i];
    }
    result.push(secondHalfText, firtstHalfText);
    result.forEach(sentence => console.log(sentence));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');