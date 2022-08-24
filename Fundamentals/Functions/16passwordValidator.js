function passwordValidator(password) {

    function isLengthEnough(stringPasword) {
        return stringPasword.length >= 6 && stringPasword.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPasword) {
        for (let currentIndex of stringPasword) {
            let currentChar = currentIndex.charCodeAt(0);

            if (
                !(currentChar >= 65 && currentChar <= 90) &&
                !(currentChar >= 97 && currentChar <= 122) &&
                !(currentChar >= 48 && currentChar <= 57)
            ) {
                return false;
            }
        }
        return true;
    }

    function isHavingMinimumTwoDigits(stringPasword) {
        let counter = 0;
        for (let currentNum of stringPasword) {
            let currentChar = currentNum.charCodeAt(0);
            if (currentChar >= 48 && currentChar <= 57) {
                counter++;
            }
        }
        return counter >=2 ? true : false;
    }
    let LengthEnough = isLengthEnough(password);
    let OnlyLettersAndDigits = isOnlyLettersAndDigits(password);
    let HavingMinimumTwoDigits = isHavingMinimumTwoDigits(password);

    if (LengthEnough && OnlyLettersAndDigits && HavingMinimumTwoDigits) {
        console.log('Password is valid');
    }
    if (!LengthEnough) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!OnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!HavingMinimumTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('logIn');
//passwordValidator('MyPass123');
//passwordValidator('Pa$s$s');