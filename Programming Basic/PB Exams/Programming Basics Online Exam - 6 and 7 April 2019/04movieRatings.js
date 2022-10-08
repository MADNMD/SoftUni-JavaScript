function movieRatings(input) {

    let numFilms = Number(input[0]);
    let avrRaitings = 0;
    let hightRaitings = Number.MIN_SAFE_INTEGER;
    let lowRaitings = Number.MAX_SAFE_INTEGER;
    let allRaitings = 0;
    let topFilm = '';
    let lowFilm = '';


    for (let i = 1; i < input.length; i++) {
        let filmName = input[i++];
        let raitings = Number(input[i]);

        allRaitings += raitings;
        if (raitings > hightRaitings) {
            topFilm = filmName;
            hightRaitings = raitings;
        }
        if (raitings < lowRaitings) {
            lowFilm = filmName;
            lowRaitings = raitings;

        }
    }
    avrRaitings = allRaitings / numFilms;
    console.log(`${topFilm} is with highest rating: ${hightRaitings.toFixed(1)}`);
    console.log(`${lowFilm} is with lowest rating: ${lowRaitings.toFixed(1)}`);
    console.log(`Average rating: ${avrRaitings.toFixed(1)}`);
}
movieRatings([
    "5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"]);