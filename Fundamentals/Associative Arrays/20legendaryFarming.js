function legendaryFarming(input) {

    const items = input.split(' ');
    const farming = {
        keyMaterial: {
            shards: 0,
            fragments: 0,
            motes: 0,
        },
        junkMaterial: {},
    };
    const itemsL = items.length;
    const markWins = 250;
    const legend1 = 'Shadowmourne';
    const legend2 = 'Valanyr';
    const legend3 = 'Dragonwrath';

    for (let i = 0; i < itemsL; i += 2) {
        let quantity = Number(items[i]);
        let material = items[i + 1].toLowerCase();

        if (material === 'shards') {
            if (!farming.keyMaterial[material]) {
                farming.keyMaterial[material] = quantity;
            } else {
                let currentQuantity = farming.keyMaterial[material];
                currentQuantity += quantity
                farming.keyMaterial[material] = currentQuantity;
            }
            if (farming.keyMaterial[material] >= markWins) {
                const restQuantity = farming.keyMaterial[material] - markWins;
                farming.keyMaterial[material] = restQuantity;
                console.log(`${legend1} obtained!`);
                break;
            }
        } else if (material === 'fragments') {
            if (!farming.keyMaterial[material]) {
                farming.keyMaterial[material] = quantity;
            } else {
                let currentQuantity = farming.keyMaterial[material];
                currentQuantity += quantity
                farming.keyMaterial[material] = currentQuantity;
            }
            if (farming.keyMaterial[material] >= markWins) {
                const restQuantity = farming.keyMaterial[material] - markWins;
                farming.keyMaterial[material] = restQuantity;
                console.log(`${legend2} obtained!`);
                break;
            }
        } else if (material === 'motes') {
            if (!farming.keyMaterial[material]) {
                farming.keyMaterial[material] = quantity;
            } else {
                let currentQuantity = farming.keyMaterial[material];
                currentQuantity += quantity
                farming.keyMaterial[material] = currentQuantity;
            }
            if (farming.keyMaterial[material] >= markWins) {
                const restQuantity = farming.keyMaterial[material] - markWins;
                farming.keyMaterial[material] = restQuantity;
                console.log(`${legend3} obtained!`);
                break;
            }
        } else {
            if (!farming.junkMaterial[material]) {
                farming.junkMaterial[material] = quantity;
            } else {
                let currentQuantity = farming.junkMaterial[material];
                currentQuantity += quantity
                farming.junkMaterial[material] = currentQuantity;
            }
        }
    }
    const allMaterials = Object.entries(farming);
    const sortedByKeyMaterial = Object.entries(allMaterials[0][1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const sortedByJunkMaterial = Object.entries(allMaterials[1][1]).sort((a, b) => a[0].localeCompare(b[0]));

    sortedByKeyMaterial.forEach(keyMaterial => {
        console.log(`${keyMaterial[0]}: ${keyMaterial[1]}`);
    });
    sortedByJunkMaterial.forEach(junkMaterial => {
        console.log(`${junkMaterial[0]}: ${junkMaterial[1]}`);
    });
}
//solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');