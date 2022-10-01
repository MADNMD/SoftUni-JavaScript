function afterNYears(peopleAge, years) {

    for (let key in peopleAge) {
        peopleAge[key] += years;
    }
    console.log(peopleAge);

    
    // let peopleNewAge = {};
    // let entries = Object.entries(peopleAge);
    // for (let [name, age] of entries) {
    //     peopleNewAge = {
    //         name: name,
    //         age: age + years,
    //     }
    //     console.log(peopleNewAge);
    // }
}
afterNYears({
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
}, 10);