function printDeckOfCards(cards) {

    const result = [];

    for (let card of cards) {

        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            result.push(createCard(face, suit));
        } catch (error) {
            console.log('Invalid card: ' + card);
            return
        }
    }
    console.log(result.join(' '));

    function createCard(face, suit) {
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
            throw new Error('Invalid face');
        }
        if (suits[suit] === undefined) {
            throw new Error('Invalid suit');
        }

        const card = {
            face: faces[face],
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
        return card;
    }

}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['5S', '3Z', 'QD', '1C']);
printDeckOfCards(['5S', '3D', '12D', '1C']);