function extractFile(input) {
    
    let index = input.lastIndexOf('\\');
    let fileName = input.substring(index + 1).split('.');
    let extension = fileName.pop();
    let template = fileName.join('.');
    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');

//--------------------------------------


    // let file = input.split('\\');
    // let nameOfFile = file.pop().split('.');
    // let extension = nameOfFile.pop();
    // let template = nameOfFile.join('.');
    // let obj = {
    //     'File name': template,
    //     'File extension': extension,
    // }
    // for (let name in obj) {
    //     console.log(`${name}: ${obj[name]}`);
    // }