function circleArea(input) {
    let radius = input;
    let result = typeof radius;
    if (result == 'number') {
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${result}.`);
    }
}
circleArea(5);
circleArea('name');

//------------------------------
// circle radius : Maty.PI * Radius * Radius;
// circle perimetur : 2 * Math.PI * Raduis;