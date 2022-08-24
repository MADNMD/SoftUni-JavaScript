function soleve(input) {

    let heros = [];

    for(let elements of input){
      let [currentName,currentLevel,items] = elements.split(' / ');
      let currentItems = items.split(', ').join(', ');
        let currentHero = {
            name: currentName,
            level: currentLevel,
            items: currentItems,
        };
        heros.push(currentHero);
    }
    heros.sort((a, b) => a.level - b.level);
    for(let hero of heros){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);


    //------------------------------------------------------
    // function inventory(input) {

    //     let heroes = [];
    
    //     for (let heroInfo of input) {
    //         let [name, level, items] = heroInfo.split(' / ');
    
    //         let sortItems = items.split(' , ');
    //         sortItems.sort((a, b) => a.localeCompare(b)).join(' ');
    
    //         let hero = {
    //             name: name,
    //             level: +level,
    //             items: sortItems
    //         }
    //         heroes.push(hero);
    //     }
    //     let sortedByLevel = heroes.sort((a, b) => a.level - b.level);
    
    //     sortedByLevel.forEach(hero => {
    //         console.log(`Hero: ${hero.name}`);
    //         console.log(`level => ${hero.level}`);
    //         console.log(`items => ${hero.items}`);
    //     })
    // }