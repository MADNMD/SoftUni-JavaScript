function theatrePromotions(typeDay, age) {
    let price = 0;
    switch (typeDay) {
        case 'Weekday':
            if (0 <= age && age <= 18) {
                price = 12;
                console.log(`${price}$`);
            } else if (18 < age && age <= 64) {
                price = 18;
                console.log(`${price}$`);
            } else if (62 < age && age <= 122) {
                price = 12;
                console.log(`${price}$`);
            } else if (age < 0 || age > 122) {
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (0 <= age && age <= 18) {
                price = 15;
                console.log(`${price}$`);
            } else if (18 < age && age <= 64) {
                price = 20;
                console.log(`${price}$`);
            } else if (62 < age && age <= 122) {
                price = 15;
                console.log(`${price}$`);
            } else if (age < 0 || age > 122) {
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                price = 5;
                console.log(`${price}$`);
            } else if (18 < age && age <= 64) {
                price = 12;
                console.log(`${price}$`);
            } else if (62 < age && age <= 122) {
                price = 10;
                console.log(`${price}$`);
            } else if (age < 0 || age > 122) {
                console.log('Error!');
            }
    }
}
theatrePromotions('Weekday', -42);