function solve() {

  const text = document.getElementById('text').value;
  const textL = text.length;
  let result = '';
  const convention = document.getElementById('naming-convention').value;

  if (convention === 'Camel Case') {

    for (let i = 0; i < textL; i++) {
      let currentChar = text[i];

      if (currentChar === ' ') {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += currentChar.toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {

    const firstLetter = text[0].toUpperCase();
    result += firstLetter;

    for (let i = 1; i < textL; i++) {
      let currentChar = text[i];

      if (currentChar === ' ') {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += currentChar.toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }

  const resultContainer = document.getElementById('result');
  resultContainer.textContent = result;
}