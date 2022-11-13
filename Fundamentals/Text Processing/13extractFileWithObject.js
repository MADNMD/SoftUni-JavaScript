function hardWords(input) {

    let file = input.split('\\');
    let nameOfFile = file.pop().split('.');
    let extension = nameOfFile.pop();
    let template = nameOfFile.join('.');
    let obj = {
        'File name': template,
        'File extension': extension,
    }
    for (let name in obj) {
        console.log(`${name}: ${obj[name]}`);
    }

}
hardWords('C:\\Internal\\training-internal\\Template.pptx');