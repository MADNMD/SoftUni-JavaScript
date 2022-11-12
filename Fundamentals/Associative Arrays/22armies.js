function armies(input) {

    const armies = {};
    const armyLeaders = [];

    input.forEach(line => {

        if (line.includes('arrives')) {
            const leader = line.split(' arrives')[0];
            armies[leader] = {
                armiesName: {},
                totalArmy: 0,
            };
            armyLeaders.push(leader);
        } else if (line.includes('defeated')) {
            const leaderName = line.split(' defeated')[0];
            if (armies[leaderName]) {
                delete armies[leaderName];
            }
        } else if (line.includes(':')) {
            let [leaderName, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            armyCount = Number(armyCount);
            if (armies[leaderName]) {
                armies[leaderName].armiesName[armyName] = armyCount;
                armies[leaderName].totalArmy += armyCount;
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);
            armyLeaders.forEach(name => {
                for (let army in armies[name]) {
                    if (armies[name][army][armyName]) {
                        armies[name].armiesName[armyName] += armyCount;
                        armies[name].totalArmy += armyCount;
                    }
                }
            });
        }
    });

    Object.entries(armies)
        .sort((a, b) => b[1].totalArmy - a[1].totalArmy)
        .forEach(leaderName => {
            console.log(`${leaderName[0]}: ${leaderName[1].totalArmy}`);
            Object.entries(leaderName[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`);
                });
        });
}
armies([
    'Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives',
    'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);