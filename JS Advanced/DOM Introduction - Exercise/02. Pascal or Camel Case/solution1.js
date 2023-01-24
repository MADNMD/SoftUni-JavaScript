function solve() {

    let textInput = document.getElementById('text').value;
    const convetion = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    let pascalCase = textInput.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');

    if (convetion === 'Pascal Case') {
        textInput = pascalCase;
        result.textContent = textInput;
    } else if (convetion === 'Camel Case') {
        textInput = pascalCase[0].toLowerCase() + pascalCase.slice(1);
        result.textContent = textInput;
    } else {
        result.textContent = 'Error!';
    }
}