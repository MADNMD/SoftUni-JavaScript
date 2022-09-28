function primeNumberChecker(input){
    let number = input;
   
    if(number === 0 || number === 1){
        console.log('false');
    }
    for(let i = 2 ; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            console.log('false');
        }else{
            console.log('true');
        }
    }
}
primeNumberChecker(8);