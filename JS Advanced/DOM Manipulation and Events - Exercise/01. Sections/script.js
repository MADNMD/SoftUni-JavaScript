function create(input) {

   const parentDiv = document.getElementById('content');
   const words = input.slice();

   words.forEach(word => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');

      pElement.textContent = word;
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      divElement.addEventListener('click', onClick);

      parentDiv.appendChild(divElement);
   });
   function onClick(event) {
      event.target.children[0].style.display = 'block';
   }
}