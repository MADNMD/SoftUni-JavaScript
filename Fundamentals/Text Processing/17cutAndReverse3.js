function cutAndReverse(input) {

    let firstHalf = [];
    let secondHalf = [];
    let text = input.split('');
    let textL = text.length;
    for (let i = 0; i < textL; i++) {
        let currentChar = text[i];
        if (firstHalf.length < text.length / 2) {
            firstHalf.push(currentChar);
        } else {
            secondHalf.push(currentChar);
        }
    }
    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.reverse().join(''));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');