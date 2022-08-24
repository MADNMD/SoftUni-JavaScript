function sortByStringLength(array) {

    let sortArray = array.sort((a,b) => a.length - b.length);
    console.log(sortArray);
}
sortByStringLength(["may", "april", "september", "august"]);