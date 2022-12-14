function areaOfFigures(input) {

    let figure = (input[0]);
    let res = 0;

    if (figure === "square") {
        let a = Number(input[1]);
        res = a * a;
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        res = a * b;
    } else if (figure === "circle") {
        let r = Number(input[1]);
        res = Math.pow(r, 2) * Math.PI;
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        res = a * h / 2;
    }
    console.log(res.toFixed(3));
}
areaOfFigures();