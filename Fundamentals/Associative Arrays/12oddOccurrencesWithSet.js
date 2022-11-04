function oddOccurrences(input) {

    const sentence = input.toLowerCase().split(' ');
    let uniqueElements = [];

    sentence.forEach(element => {
        let count = 0;
        sentence.forEach(currentEl => {
            if (element === currentEl) {
                count++;
            }
        });
        if (count % 2 !== 0) {
            uniqueElements.push(element);
        }
    });
    uniqueElements = new Set(uniqueElements);
    let result = '';
    uniqueElements.forEach(element => {
        result += element + ' ';
    });
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');