function carFactory(object) {

    const carInfo = {};
    let engine = {};
    let carriage = {};
    let wheels = {};

    carInfo.model = object.model;

    if (object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
        carInfo.engine = engine;
    } else if (object.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
        carInfo.engine = engine;
    } else if (object.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
        carInfo.engine = engine;
    }

    if (object.carriage === 'hatchback') {
        carriage.type = 'hatchback';
        carriage.color = object.color;
        carInfo.carriage = carriage;
    } else if (object.carriage === 'coupe') {
        carriage.type = 'coupe';
        carriage.color = object.color;
        carInfo.carriage = carriage;
    }

    let sizeWheels = [];

    for (let i = 0; i < 4; i++) {
        if (object.wheelsize % 2 === 0) {
            let size = object.wheelsize - 1;
            sizeWheels.push(size);
        } else {
            sizeWheels.push(object.wheelsize);
        }
    }
    carInfo.wheels = sizeWheels;

   return carInfo;
}
// carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// });
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);