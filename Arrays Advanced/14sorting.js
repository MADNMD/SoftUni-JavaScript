function sorting(array){

    let sortArray = array.sort((a,b) => a - b);
    let sortArrayL = sortArray.length;
    let finalResult = [];

    for(let i = 0; i < sortArrayL; i++){
        let lastElement = sortArray.pop();
        finalResult.push(lastElement);
        let fisrtElement = sortArray.shift();
        finalResult.push(fisrtElement);
        sortArrayL--;
    }
    console.log(finalResult.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);