function chessBoard(input) {
    let size = input;
    let currenColour = 'black';
    let previousColour = '';

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');

        for (let colums = 1; colums <= size; colums++) {
            console.log(`    <span class="${currenColour}"></span>`);
            previousColour = currenColour;
            currenColour = previousColour === 'black' ? 'white' : 'black';
        }
        console.log('  </div>');

        if (size % 2 === 0) {
            previousColour = currenColour;
            currenColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log(' </div>');
}
chessBoard(3);