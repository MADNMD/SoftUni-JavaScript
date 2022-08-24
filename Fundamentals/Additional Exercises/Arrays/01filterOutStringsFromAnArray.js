function filterOutStringsFromAnArray(array) {

    let filterArray = array.filter(x => typeof x === 'number');
    console.log(filterArray);
}
filterOutStringsFromAnArray([1, 2, "aasf", "1", "123", 123]);