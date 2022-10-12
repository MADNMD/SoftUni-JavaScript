function paintingEggs(input) {

    let size = input[0];
    let colour = input[1];
    let eggs = Number(input[2]);

    switch (colour) {
        case 'Red':
            if (size === 'Large') {
                eggs *= 16;
                break;
            } else if (size === 'Medium') {
                eggs *= 13;
                break;
            } else if (size === 'Small') {
                eggs *= 9;
                break;
            }
        case 'Green':
            if (size === 'Large') {
                eggs *= 12;
                break;
            } else if (size === 'Medium') {
                eggs *= 9;
                break;
            } else if (size === 'Small') {
                eggs *= 8;
                break;
            }
        case 'Yellow':
            if (size === 'Large') {
                eggs *= 9;
                break;
            } else if (size === 'Medium') {
                eggs *= 7;
                break;
            } else if (size === 'Small') {
                eggs *= 5;
                break;
            }
    }
    let totallPrice = eggs * 0.65;
    console.log(`${totallPrice.toFixed(2)} leva.`);
}
paintingEggs(["Medium", "Green", "5"]);