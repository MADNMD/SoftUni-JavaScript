function convertToJSON(firstName, lastName, hairColor) {

    const personInfo = {
        name: firstName,
        lastName,
        hairColor,
    }
const parstToJSON = JSON.stringify(personInfo);
console.log(parstToJSON); 
}
convertToJSON('George', 'Jones', 'Brown');
