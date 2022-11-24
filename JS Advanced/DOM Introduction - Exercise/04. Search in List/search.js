function search() {

   let counter = 0;
   const searchTown = document.getElementById('searchText').value;

   const towns = [...document.querySelectorAll('li')];

   for (let town of towns) {
      if (town.textContent.includes(searchTown) && searchTown !== '') {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`;
}
