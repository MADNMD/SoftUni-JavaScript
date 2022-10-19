function sortAnArrayBy2Criteria(array) {

    const sortedByAlphabetical = array.sort((a, b) => a.localeCompare(b));
    const sortedByLength = sortedByAlphabetical.sort((a, b) => a.length - b.length);

    console.log(sortedByLength.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);