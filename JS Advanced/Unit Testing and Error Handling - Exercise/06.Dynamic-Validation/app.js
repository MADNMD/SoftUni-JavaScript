function validate() {
    
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', onChange);

    function onChange (event){

        const pattern = /\w+@\w+\.\w+/gm;

        if(!pattern.test(event.target.value)){
            event.target.classList.add('error');
        }else{
            event.target.classList.remove('error');
            emailInput.value = '';
        }
    }
}