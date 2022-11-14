function hardWords(input) {

 
    let text = input[0].split(', ').filter(el => el !== ',');
    let words = input[1];
    let result = [];
    for (let sentence of text) {
        sentence = sentence.split(' ');
        for (let element of sentence) {
            if (element.includes('_')) {
                let index = sentence.indexOf(element);
                if (element.endsWith('.')) {
                    element = element.slice(0, -1);
                }
                for (let word of words) {
                    if (element.length === word.length) {
                        sentence.splice(index, 1, word);

                    }
                }
            }
        }
        result.push(sentence);
    }
    let finalResult = [].concat.apply([], result)
    console.log(finalResult.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);