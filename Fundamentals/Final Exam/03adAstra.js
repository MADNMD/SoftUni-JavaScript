function adAstra(input) {
    let pattern = /([#|])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calorie>\d+)\1/g;
    let totalCalories = 0;
    let foodInfo = [];
    let regex = pattern.exec(input);
    while (regex !== null) {

        let food = regex.groups.food;
        let date = regex.groups.date;
        let calorie = regex.groups.calorie;
        foodInfo.push({ item: food, day: date, cal: calorie });
        totalCalories += Number(calorie);

        regex = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (let i = 0; i < foodInfo.length; i++) {
        console.log(`Item: ${foodInfo[i].item}, Best before: ${foodInfo[i].day}, Nutrition: ${foodInfo[i].cal}`);
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);