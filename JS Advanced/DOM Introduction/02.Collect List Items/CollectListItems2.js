function extractText() {

    const elements = Array.from(document.getElementById('items').children);
    const textArea = document.getElementById('result');
    elements.forEach(liElement => {
        textArea.value += `\n${liElement.textContent}`;
    })
}