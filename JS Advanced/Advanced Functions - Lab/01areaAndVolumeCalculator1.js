function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {

    return JSON.parse(input)
        .map(points => ({            // решение с function expresion
            area: area.apply(points),
            volume: vol.apply(points),
        })
        );
}
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]`));