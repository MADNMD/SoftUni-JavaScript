function calorieObject(array) {

    const myObj = array.reduce((acc, currentEl, index) => {
        if (index % 2 === 0) {
            acc[currentEl] = Number(array[index + 1]);
        }
        return acc
    }, {});
    console.log(myObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);