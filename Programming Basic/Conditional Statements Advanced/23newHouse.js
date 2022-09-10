function newHouse(input) {

    let type = input[0];
    let numberFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;

    switch (type) {
        case 'Roses':
            sum = numberFlowers * 5;
            if (numberFlowers > 80) {
                sum = sum * 0.90;
            } break;
    }switch (type) {
        case 'Dahlias':
            sum = numberFlowers * 3.80;
            if (numberFlowers > 90) {
                sum = sum * 0.85;
            } break;
    }switch (type) {
        case 'Tulips':
            sum = numberFlowers * 2.80;
            if (numberFlowers > 80) {
                sum = sum * 0.85;
            } break;
    }switch (type) {
        case 'Narcissus':
            sum = numberFlowers * 3;
            if (numberFlowers < 120) {
                sum = sum * 1.15;
            } break;
    }switch (type) {
        case 'Gladiolus':
            sum = numberFlowers * 2.50;
            if (numberFlowers < 80) {
                sum = sum * 1.20;
            } break;
    }
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${numberFlowers} ${type} and ${(budget - sum).toFixed(2)} leva left.`);

    } else if (sum >= budget) {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);