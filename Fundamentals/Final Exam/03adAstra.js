function adAstra(input) {

    const regex = /([\|#])(?<foodName>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    const coliresForADay = 2000;
    let totalCalories = 0;
    let dayCounter = 0;
    const foodInfo = [];

    let match = regex.exec(input);

    while (match !== null) {

        const food = match.groups.foodName;
        const date = match.groups.date;
        const calories = Number(match.groups.calories);
        totalCalories += calories;

        foodInfo.push(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`);
        match = regex.exec(input);
    }
    dayCounter = Math.floor(totalCalories / coliresForADay);

    console.log(`You have food to last you for: ${dayCounter} days!`);
    foodInfo.forEach(element => console.log(element));
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
