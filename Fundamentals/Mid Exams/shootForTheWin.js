function shootForTheWin(input) {

    let target = input.shift().split(' ').map(Number);
    let countOfShot = 0;
    let inputL = input.length;
    let shotOnTarget = 0;

    for (let i = 0; i < inputL; i++) {
        let searchCommand = input[i];

        if (searchCommand === 'End') {
            console.log(`Shot targets: ${countOfShot} -> ${target.join(' ')}`);
        }
        let index = Number(input[i]);

        if (target.length > index) {
            countOfShot++;
            shotOnTarget = target[index];
            target.splice(index, 1, -1);

            for (let j = 0; j < target.length; j++) {
                let currentNum = target[j];

                if (currentNum > shotOnTarget) {
                    currentNum -= shotOnTarget;
                    target.splice(j, 1, currentNum);
                } 
                else if (currentNum <= shotOnTarget && currentNum > 0) {
                    currentNum += shotOnTarget;
                    target.splice(j, 1, currentNum);
                }
            }
        }
    }
}
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);

//  let shotTargets = 0;
//     let targetsArray = sequence[0].split(' ').map(el => Number(el));
//     sequence.shift();
 
//     for (const element of sequence) {
//         if(element == 'End') {
//             console.log(`Shot targets: ${shotTargets} -> ${targetsArray.join(' ')}`);
//         }
//         if(targetsArray.length > element) {
//             let currentTarget = targetsArray[element];
            
//             for (const i in targetsArray) {
//                 if(targetsArray[i] != -1) {
//                     if(targetsArray[i] > currentTarget) {
//                         targetsArray[i] -= currentTarget;
//                     } else {
//                         targetsArray[i] += currentTarget;
//                     }
//                 }
//             }
//             targetsArray[element] = -1;
//             shotTargets += 1;
//         }
//     }