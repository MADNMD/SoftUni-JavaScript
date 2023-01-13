function sortAnArrayBy2Criteria(array) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach(name => {
        console.log(name)
    });    
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);