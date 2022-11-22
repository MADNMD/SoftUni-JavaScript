function matchFullName(text) {

    const pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let result = '';

    let match = pattern.exec(text);

    while (match) {

        result += match[0] + ' ';

        match = pattern.exec(text);
    }
    console.log(result);
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");