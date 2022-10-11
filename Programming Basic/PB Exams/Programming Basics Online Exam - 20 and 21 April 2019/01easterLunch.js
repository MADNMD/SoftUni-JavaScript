function easterLunch(input) {

    let bread = Number(input[0]);
    let eggShell = Number(input[1]);
    let kgCoockies = Number(input[2]);

    let breadPrice = bread * 3.2;
    let eggShellPrice = eggShell * 4.35;
    let kgCoockiesPrice = kgCoockies * 5.4;
    let paintEgg = eggShell * 12 * 0.15;

    let allPrice = breadPrice + eggShellPrice + kgCoockiesPrice + paintEgg;

    console.log(allPrice.toFixed(2));
}
easterLunch(["3", "2", "3"]);