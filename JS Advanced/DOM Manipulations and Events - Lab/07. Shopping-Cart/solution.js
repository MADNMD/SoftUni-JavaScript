function solve() {

   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checheckout);

   const cart = [];
   const output = document.getElementsByTagName('textarea')[0];
   output.value = '';

   function onClick(event) {

      if (event.target.tagName === 'BUTTON' && event.target.classList.contains('add-product')) {
         const product = event.target.parentElement.parentElement;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checheckout() {
      const products = new Set();
      cart.forEach(product => products.add(product.name));
      const totalPrice = cart.reduce((a, b) => a + b.price, 0);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;
      Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = true);
   }
}