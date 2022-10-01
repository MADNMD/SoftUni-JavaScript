function heroesOfCodeAndLogicVII(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    const maxHP = 100;
    const maxMP = 200;

    for (let i = 0; i < numberOfHeroes; i++) {
        let currentInfoForHeroe = input.shift();
        let [heroe, hp, mp] = currentInfoForHeroe.split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes[heroe] = { hp, mp };
    }
    let line = input.shift();
    while (line !== 'End') {

        let [command, ...data] = line.split(' - ');

        if (command === 'CastSpell') {
            let heroe = data[0];
            let manaPoint = Number(data[1]);
            let spellName = data[2];
            let currentMana = heroes[heroe].mp;
            if (currentMana >= manaPoint) {
                currentMana -= manaPoint;
                heroes[heroe].mp = currentMana;
                console.log(`${heroe} has successfully cast ${spellName} and now has ${currentMana} MP!`);
            } else {
                console.log(`${heroe} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let heroe = data[0];
            let damage = Number(data[1]);
            let attacker = data[2];
            let heroeHealth = heroes[heroe].hp;
            heroeHealth -= damage;
            if (heroeHealth > 0) {
                heroes[heroe].hp = heroeHealth;
                console.log(`${heroe} was hit for ${damage} HP by ${attacker} and now has ${heroeHealth} HP left!`);
            } else {
                console.log(`${heroe} has been killed by ${attacker}!`);
                delete heroes[heroe];
            }
        } else if (command === 'Recharge') {
            let heroe = data[0];
            let amountMana = Number(data[1]);
            let currentMana = heroes[heroe].mp;
            currentMana += amountMana;
            let needMana = currentMana - maxMP;
            if (currentMana > maxMP) {
                currentMana = maxMP;
                amountMana = needMana;
            }
            heroes[heroe].mp = currentMana;
            console.log(`${heroe} recharged for ${amountMana} MP!`);
        } else if (command === 'Heal') {
            let heroe = data[0];
            let amoutHealth = Number(data[1]);
            let currentHealth = heroes[heroe].hp;
            let needHP = maxHP - currentHealth;
            currentHealth += amoutHealth;
            if (currentHealth > maxHP) {
                currentHealth = maxHP;
                amoutHealth = needHP;
            }
            heroes[heroe].hp = currentHealth;
            console.log(`${heroe} healed for ${amoutHealth} HP!`);
        }
        line = input.shift();
    }
    for (let heroe in heroes) {
        console.log(heroe);
        console.log(`  HP: ${heroes[heroe].hp}`);
        console.log(`  MP: ${heroes[heroe].mp}`);
    }
}
heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);

// heroesOfCodeAndLogicVII([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);