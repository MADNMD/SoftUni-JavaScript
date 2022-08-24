function sortAnArrayByStringLength(array) {

    let sortByLength = array.sort((a,b) => a.length - b.length);
    console.log(sortByLength);
}
sortAnArrayByStringLength(["Google", "Apple", "Microsoft"]);