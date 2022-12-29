function notify(message) {

  const divNotification = document.getElementById('notification');
  divNotification.textContent = message;
  divNotification.style.display = 'block';

  // setTimeout(() => {
  //   divNotification.style.display = 'none'
  // },2000);

  divNotification.addEventListener('click', hideMessage);

  function hideMessage() {
    divNotification.style.display = 'none';
  }
}