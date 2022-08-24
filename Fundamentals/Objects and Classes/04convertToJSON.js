function convertToJSON(fn, ls,ch){
    let person ={
        name : fn,
        lastName : ls,
        hairColor : ch
    }
    let convertJSON = JSON.stringify(person);
    console.log(convertJSON);
}
convertToJSON('George', 'Jones', 'Brown');