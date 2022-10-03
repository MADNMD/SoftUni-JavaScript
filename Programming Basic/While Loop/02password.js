function password(input) {

    let index = 0;
    let userName = input[index];
    let password = input[index];
    let data = input[index];
    index++

    while (data !== password) {
        data = input[index];
        index++
    }
    console.log(`Welcome ${userName}!`)
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);