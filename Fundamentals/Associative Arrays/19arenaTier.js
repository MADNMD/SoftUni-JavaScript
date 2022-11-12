function arenaTier(input) {

    const gladiators = {};

    let line = input.shift();

    while (line !== 'Ave Cesar') {

        if (line.includes('->')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators[name]) {
                gladiators[name] = [];
            }
            if (!gladiators[name].includes(technique) || gladiators[name][1] < skill) {
                gladiators[name].push(technique, skill);
            }
        } else if (line.includes('vs')) {
            let [playerOne, playerTwo] = line.split(' vs ');

            if (gladiators[playerOne] && gladiators[playerTwo]) {
                const firstPlayerItems = gladiators[playerOne];
                const secondPlayerItems = gladiators[playerTwo];

                for (let i = 0; i < firstPlayerItems.length; i += 2) {
                    let firstTechnique = firstPlayerItems[i]
                    for (let j = 0; j < secondPlayerItems.length; j += 2) {
                        let currentTechnique = secondPlayerItems[j];
                        if (firstTechnique === currentTechnique) {
                            if (firstPlayerItems[i + 1] > secondPlayerItems[j + 1]) {
                                delete gladiators[playerTwo];
                            } else {
                                delete gladiators[playerOne];
                            }

                        }
                    }
                }
            }
        }
        line = input.shift();
    }
    const totalSkills = {};
    for (let gladiator in gladiators) {
        let allSkills = 0;
        for (let i = 0; i < gladiators[gladiator].length; i++) {
            if (i % 2 !== 0) {
                allSkills += gladiators[gladiator][i];
            }
        }
        totalSkills[gladiator] = allSkills;
    }
    const sortedByTotalSkills = Object.entries(totalSkills);
    sortedByTotalSkills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));


    for (let i = 0; i < sortedByTotalSkills.length; i++) {
        console.log(`${sortedByTotalSkills[i][0]}: ${sortedByTotalSkills[i][1]} skill`);
        const allItems = {};

        for (let j = 0; j < gladiators[sortedByTotalSkills[i][0]].length; j += 2) {
            allItems[gladiators[sortedByTotalSkills[i][0]][j]] = gladiators[sortedByTotalSkills[i][0]][j + 1];
        }
        const sortedByTechAndSkill = Object.entries(allItems);
        sortedByTechAndSkill.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        for (let k = 0; k < sortedByTechAndSkill.length; k++) {
            console.log(`- ${sortedByTechAndSkill[k][0]} <!> ${sortedByTechAndSkill[k][1]}`);
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);
// solve([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
//     ]
//     );
