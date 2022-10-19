function listOfNames(array) {

    const listOfName = array;
    const sortedName = listOfName.sort((a, b) => a.localeCompare(b));
    const sortedNameL = sortedName.length;

    for (let i = 0; i < sortedNameL; i++) {
        console.log(`${i + 1}.${sortedName[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);