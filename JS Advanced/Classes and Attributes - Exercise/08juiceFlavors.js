function juiceFlavors(input) {

    const juices = {};
    const bottles = {};

    input.forEach(line => {

        let [juiceName, quantity] = line.split(' => ');

        if (!juices[juiceName]) {
            juices[juiceName] = 0
        }
        juices[juiceName] += Number(quantity);

        if (juices[juiceName] >= 1000) {

            let bottle = Math.floor(juices[juiceName] / 1000);

            if (!bottles[juiceName]) {
                bottles[juiceName] = 0;
            }
            bottles[juiceName] += bottle;
            juices[juiceName] -= bottle * 1000;
        }
    });

    for (let bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`);
    }
}
// juiceFlavors([
//     'Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);