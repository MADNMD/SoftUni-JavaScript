function aMinerTask(input) {

    const resurces = new Map();
    const listOfResurce = input;
    const listOfResurceL = listOfResurce.length

    for (let i = 0; i < listOfResurceL; i += 2) {
        const currentResurce = listOfResurce[i];
        const quantity = Number(listOfResurce[i + 1]);

        if (!resurces.has(currentResurce)) {
            resurces.set(currentResurce, quantity);
        } else {
            let currentQuantity = resurces.get(currentResurce);
            currentQuantity += quantity;
            resurces.set(currentResurce, currentQuantity);
        }
    }
    for (let resurce of resurces) {
        console.log(`${resurce[0]} -> ${resurce[1]}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);


    // const resurces = {};
    // const listOfResurce = input;
    // const listOfResurceL = listOfResurce.length;

    // for(let i = 0; i < listOfResurceL; i += 2){
    //     let currentResurce = listOfResurce[i];
    //     let quantity = Number(listOfResurce[i+1]);

    //     if(!resurces[currentResurce]){
    //         resurces[currentResurce] = quantity;
    //     }else{
    //         resurces[currentResurce] += quantity;
    //     }
    // }
    // for(let resurce in resurces){
    //     console.log(`${resurce} -> ${resurces[resurce]}`);
    // }
