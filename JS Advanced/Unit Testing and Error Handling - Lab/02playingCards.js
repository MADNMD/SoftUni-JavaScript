function playingCards(face, suit) {

    const faces = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 'J',
        'Q': 'Q',
        'K': 'K',
        'A': 'A',
    }

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (faces[face] === undefined) {
        throw new Error('Invalid face ' + face);
    }
    if(suits[suit] === undefined){
        throw new Error('Invalid suit ' + suit);
    }

    const card = {
        face: faces[face],
        suit: suits[suit],
        toString(){
            return this.face + this.suit;
        }
    };
    return card;
}
playingCards('A', 'S');
playingCards('10', 'H');
playingCards('1', 'C');
playingCards('12', 'C');