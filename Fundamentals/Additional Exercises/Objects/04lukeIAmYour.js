function lukeIAmYour(name) {

    let person = {
        father: 'Darth Vader',
        sister: 'Leia',
        brother: 'Han',
        droid: 'R2D2',
    }
    if (name === person.father) {
        console.log("Luke, I am your father.");
    } else if (name === person.sister) {
        console.log("Luke, I am your sister.");
    } else if (name === person.brother) {
        console.log("Luke, I am your brother in law.");
    } else if (name === person.droid) {
        console.log("Luke, I am your droid.");
    }

}
lukeIAmYour("Darth Vader");