function extractText() {
    const items = [...document.querySelectorAll('li')];
    const text = items.map(element => element.textContent).join('\n');
    document.getElementById('result').value = text;
    // document.getElementById('result').textContent = text;
} 