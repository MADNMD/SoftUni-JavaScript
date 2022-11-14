function serializeString(input) {

    input = input[0];
    const letters = {};
    const inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        const currentLetter = input[i];

        if (!letters[currentLetter]) {
            letters[currentLetter] = [i];
        } else {
            letters[currentLetter].push(i);
        }
    }
    for (const letter in letters) {
        console.log(`${letter}:${letters[letter].join('/')}`);
    }
}
serializeString(["abababa"]);