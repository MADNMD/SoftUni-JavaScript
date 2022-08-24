function lastKNumbersSequance(n, k) {

    let result = [1];

    for (let i = 0; i < n; i++) {
        let sequence = result.slice(-k);
        let sum = 0;
        for(let element of sequence){
            sum += element;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKNumbersSequance(6, 3);
//	1 1 2 4 7 13	