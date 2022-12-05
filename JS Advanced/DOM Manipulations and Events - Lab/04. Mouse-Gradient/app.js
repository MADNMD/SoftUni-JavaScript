function attachGradientEvents() {

    const gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', mouseMove);
    const result = document.getElementById('result');

    function mouseMove(event) {
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }

}





















// function attachGradientEvents() {

//     const gradient = document.getElementById('gradient');
//     gradient.addEventListener('mousemove', onMove);
//     const result = document.getElementById('result');

//     function onMove(event) {
//         result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
//     }
// }