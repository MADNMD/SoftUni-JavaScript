function covertToObject(input) {
    let person = JSON.parse(input);
    let keys = Object.keys(person);

    for(let key of keys){
        console.log(`${key}: ${person[key]}`);
    }
}
covertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

    // let person = JSON.parse(input);
    // let entries = Object.entries(person);

    // for(let [key, value] of entries){
    //     console.log(`${key}: ${value}`);
    // }