function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let search = document.getElementById('searchField');
   const studentsInfo = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {

      for (let line of studentsInfo) {
         
         line.classList.remove('select');
         
         if (search.value !== '' && line.textContent.includes(search.value)) {
            line.className = 'select';
         }
      }
      search.value = '';
   }
}
