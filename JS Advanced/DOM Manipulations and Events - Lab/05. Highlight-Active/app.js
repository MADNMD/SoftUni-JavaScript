function focused(){

    const sections = Array.from(document.querySelectorAll('input'));

  
    sections.forEach(section => {
        section.addEventListener('focus', onFocused)
        section.addEventListener('blur', onBlur)
    });

    function onFocused(event){
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(event){
        event.target.parentElement.classList.remove('focused');
    }

}



























// function focused() {

//     const sections = Array.from(document.querySelectorAll('input'));
//     sections.forEach(input => {
//         input.addEventListener('focus', onFocused);
//         input.addEventListener('blur', onBlur);
//     });

//     function onFocused(event) {
//         event.target.parentElement.classList.add('focused');
//     }

//     function onBlur(event) {
//         event.target.parentElement.classList.remove('focused');
//     }
// }