function matchPhoneNumber(phoneNumbers) {

    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;

    let match = pattern.exec(phoneNumbers[0]);

    let validPhone = [];

    while (match !== null) {
        validPhone.push(match[0]);
        match = pattern.exec(phoneNumbers[0]);
    }
    console.log(validPhone.join(', '));
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");