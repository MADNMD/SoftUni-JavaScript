function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const restaurants = {};
      let avrSelary = 0;
      let bestSelary = 0;
      let bestRestuarant = '';
      let bestWorkers = '';
      const input = JSON.parse(document.querySelector('#inputs textarea').value);

      for (let line of input) {
         let restaurantInfo = line.split(' - ');
         const restaurantName = restaurantInfo.shift();

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {};
         }
         const workers = restaurantInfo.shift().split(', ');

         for (let worker of workers) {
            let [name, selary] = worker.split(' ');
            selary = Number(selary);
            if (!restaurants[restaurantName][name]) {
               restaurants[restaurantName][name] = selary;
            } else {
               restaurants[restaurantName][name] = selary;
            }
         }
      }
      let restuarantArr = Object.entries(restaurants);

      for (let entry of restuarantArr) {

         let selaries = Object.entries(entry[1]);
         let currentAvrSelary = 0;

         for (let [name, selary] of selaries) {
            currentAvrSelary += selary;
         }
         currentAvrSelary /= selaries.length;

         if (currentAvrSelary > avrSelary) {
            avrSelary = currentAvrSelary;
            bestRestuarant = entry[0];
         }
      }
      const workers = Object.entries(restaurants[bestRestuarant]).sort((a, b) => b[1] - a[1]);
      workers.forEach(worker => (bestWorkers += `Name: ${worker[0]} With Salary: ${worker[1]} `));
      bestSelary = workers[0][1];
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestuarant} Average Salary: ${avrSelary.toFixed(2)} Best Salary: ${bestSelary.toFixed(2)}`;
      document.querySelector('#workers p').textContent = bestWorkers;
   }
}