function addAndRemove(arr) {

    let myArr = arr;
    let myArrL = myArr.length;
    let result = [];

    for (let i = 0; i < myArrL; i++) {

        if(myArr[i] === 'remove'){
            result.pop();
        }else if(myArr[i] === 'add'){
            result.push(i + 1);
        }
    }
    if(result.length === 0){
        console.log('Empty');
    }else {
        console.log(result.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove']);