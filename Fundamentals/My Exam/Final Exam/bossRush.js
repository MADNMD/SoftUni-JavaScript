function messagesManager(input) {

    const arrayInput = input.slice();
    let persons = Number(arrayInput.shift());

    for (let person of arrayInput) {

        const pattern = /(\|)(?<name>[A-Z]{4,})\1:(#)(?<title>[A-Za-z]+ [A-Za-z]+)\3/g;

        let match = pattern.exec(person);

        if (match !== null) {

            const name = match.groups.name;
            const title = match.groups.title;

            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);

        } else {
            console.log('Access denied!');
        }
    }
}
messagesManager([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);

// bossRush([
//     '3',
//     '|STEFAN|:#H1gh Overseer#',
//     '|IVAN|:#Master detective#',
//     '|KARL|: #Marketing lead#']);    