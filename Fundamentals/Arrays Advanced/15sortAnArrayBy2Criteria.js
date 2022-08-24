function sortAnArrayBy2Criteria(name) {

    let nameSort = name.sort((a,b) => a.localeCompare(b)).sort((a,b) => a.length - b.length);
    console.log(nameSort.join('\n'));
}
sortAnArrayBy2Criteria(['test', "Deny", "omen", "Default"]);