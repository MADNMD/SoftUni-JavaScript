function vacantion(numberOfPeople, typeGroup, dayOfWeek) {
    let price = 0;
    switch (dayOfWeek) {
        case 'Friday':
            if (typeGroup === 'Students') {
                price = 8.45;
                price *= numberOfPeople;
                if (numberOfPeople >= 30) {
                    price *= 0.85;
                }
            } else if (typeGroup === 'Business') {
                price = 10.9;
                if (numberOfPeople >= 100) {
                    numberOfPeople -= 10;
                    price *= numberOfPeople;
                }else {
                    price *= numberOfPeople;
                }
            } else if (typeGroup === 'Regular') {
                price = 15;
                price *= numberOfPeople;
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price *= 0.95;
                }
            }
            break;
        case 'Saturday':
            if (typeGroup === 'Students') {
                price = 9.80;
                price *= numberOfPeople;
                if (numberOfPeople >= 30) {
                    price *= 0.85;
                }
            } else if (typeGroup === 'Business') {
                price = 15.6;
                if (numberOfPeople >= 100) {
                    numberOfPeople -= 10;
                    price *= numberOfPeople;
                }else {
                    price *= numberOfPeople;
                }
            } else if (typeGroup === 'Regular') {
                price = 20;
                price *= numberOfPeople;
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price *= 0.95;
                }
            }
            break;
        case 'Sunday':
            if (typeGroup === 'Students') {
                price = 10.46;
                price *= numberOfPeople;
                if (numberOfPeople >= 30) {
                    price *= 0.85;
                }
            } else if (typeGroup === 'Business') {
                price = 16;
                if (numberOfPeople >= 100) {
                    numberOfPeople -= 10;
                    price *= numberOfPeople;
                }else{
                    price *= numberOfPeople;
                }
            } else if (typeGroup === 'Regular') {
                price = 22.5;
                price *= numberOfPeople;
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price *= 0.95;
                }
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacantion(150, "Business", "Saturday");