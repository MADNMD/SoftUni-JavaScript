function oddOccurrences(input) {

    let elements = input.toLowerCase().split(' ');
    let occurencesEl = {};
    for (let element of elements) {
        if (!occurencesEl.hasOwnProperty(element)) {
            occurencesEl[element] = 1;
        } else {
            occurencesEl[element] += 1;
        }
    }
    let entries = Object.entries(occurencesEl);
    let filtredElement = entries.filter(el => el[1] % 2 !== 0);
    let result = [];
    for (let element of filtredElement) {
        result.push(element[0]);
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');