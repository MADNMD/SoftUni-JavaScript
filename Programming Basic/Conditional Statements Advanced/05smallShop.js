function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let quanitiy = Number(input[2]);
    let result = 0;

    if (town === 'Sofia') {
        switch (product) {
            case 'coffee': result = quanitiy * 0.50; break;
            case 'water': result = quanitiy * 0.80; break;
            case 'beer': result = quanitiy * 1.20; break;
            case 'sweets': result = quanitiy * 1.45; break;
            case 'peanuts': result = quanitiy * 1.60; break;
        }
    } else if (town === 'Plovdiv') {
        switch (product) {
            case 'coffee': result = quanitiy * 0.40; break;
            case 'water': result = quanitiy * 0.70; break;
            case 'beer': result = quanitiy * 1.15; break;
            case 'sweets': result = quanitiy * 1.30; break;
            case 'peanuts': result = quanitiy * 1.50; break;
        }
    } else if (town === 'Varna') {
        switch (product) {
            case 'coffee': result = quanitiy * 0.45; break;
            case 'water': result = quanitiy * 0.70; break;
            case 'beer': result = quanitiy * 1.10; break;
            case 'sweets': result = quanitiy * 1.35; break;
            case 'peanuts': result = quanitiy * 1.55; break;
        }
    }
    console.log(result);
}
smallShop((["coffee", "Varna", "2"]));