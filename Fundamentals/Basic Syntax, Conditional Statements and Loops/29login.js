function login(passwords) {

    let userName = passwords.shift();
    let correctPass = 0;

    for (let password of passwords) {
        let currentPass = password.split('').reverse().join('');
        if (currentPass === userName) {
            console.log(`User ${userName} logged in.`);
        } else {
            correctPass++;
            if (correctPass === 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);