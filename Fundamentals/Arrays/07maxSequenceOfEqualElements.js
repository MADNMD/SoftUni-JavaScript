function maxSequenceOfEqualElements(array) {
    let arrayL = array.length;
    let longetsSequence = [];

    for (let i = 0; i < arrayL; i++) {
        let currentSequnce = [];

        for (let j = i; j < arrayL; j++) {

            if (array[i] === array[j]) {
                currentSequnce.push(array[i]);
            } else {
                break;
            }
        }
        if (currentSequnce.length > longetsSequence.length) {
            longetsSequence = currentSequnce;
        }
    }
    console.log(longetsSequence.join(' '));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

// let longestSequence = [];
//         let leftMostIndex = 0;

//         for (let i = 0; i < arr.length; i++) {
//            let currentEl = Number(arr[i]);
//             let currentSequence = [currentEl];

//             for (let j = i + 1; j < arr.length; j++) {
//                 let nextEl = Number(arr[j]);

//                 if (nextEl === currentEl) {
//                     currentSequence.push(nextEl)
//                 } else {
//                     break;
//                 }
//             }
//             if (currentSequence.length > longestSequence.length) {
//                 longestSequence = [];

//                 for (let j = 0; j < currentSequence.length; j++) {
//                     longestSequence.push(currentSequence[j]);
//                 }

//             } else if (currentSequence.length === longestSequence.length) {
//                 if (i < leftMostIndex) {
//                     leftMostIndex = i;
//                 }
//             }
//         }
//         console.log(longestSequence.join(' '));