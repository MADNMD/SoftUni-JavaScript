function cutAndReverse(input) {
    let firstHalf = input
        .split('')
        .slice(0, input.length / 2)
        .reverse()
        .join('');
    let secondHalf = input
        .split('')
        .slice(input.length / 2, input.length)
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');


//--------------------------------------------------------


    // let firstHalf = [];
    // let secondHalf = [];
    // let text = input.split('');
    // let textL = text.length;
    // for (let i = 0; i < textL; i++) {
    //     let currentChar = text[i];
    //     if (firstHalf.length < text.length / 2) {
    //         firstHalf.push(currentChar);
    //     } else {
    //         secondHalf.push(currentChar);
    //     }
    // }
    // console.log(firstHalf.reverse().join(''));
    // console.log(secondHalf.reverse().join(''));