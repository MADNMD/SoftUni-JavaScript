function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', decode);
    buttons[1].addEventListener('click', encode);

    function decode() {
        let decodeMessages = '';
        let input = textAreas[0].value;
        const inputL = input.length;

        for (let i = 0; i < inputL; i++) {
            decodeMessages += String.fromCharCode(input[i].charCodeAt() + 1);
        }
        textAreas[1].value = decodeMessages;
        textAreas[0].value = '';
    }

    function encode() {
        let encodeMessages = '';
        let input = textAreas[1].value;
        const inputL = input.length;

        for (let i = 0; i < inputL; i++) {
            encodeMessages += String.fromCharCode(input[i].charCodeAt() - 1);
        }
        textAreas[1].value = encodeMessages;
    }
}