function solve() {

  const inputText = document.getElementById('input');
  const text = inputText.value.split('.').filter(sentence => sentence !== '');
  const result = document.getElementById('output');

  while (text.length > 0) {
    const threeSentences = text.splice(0, 3).join('. ') + '.';
    const paragraph = document.createElement('p');
    paragraph.textContent = threeSentences;
    result.appendChild(paragraph);
  }
}