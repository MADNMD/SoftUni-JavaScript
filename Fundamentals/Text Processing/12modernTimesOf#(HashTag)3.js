function modernTimesOfHashTag(input) {

    let text = input.split(' ');
    let result = [];
    for (let word of text) {
        if (word.startsWith('#')) {
            if (word.length > 1) {
                word = word.replace('#', ' ').trim().split('');
                let wordL = word.length;
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');