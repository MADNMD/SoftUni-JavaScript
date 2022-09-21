function matchFullName(text) {
    let pattern = /\b([A-Z][a-z]+) ([A-Z][a-z]+)/g;
    let name = text.match(pattern);
    console.log(name.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");