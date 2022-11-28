function deleteByEmail(){

    const inputEmail = document.querySelector('input[name="email"]');
    const emailCellElements = document.querySelectorAll('tr td:nth-of-type(even)');
    const result = document.getElementById('result');
    
    const arrayEmails = [...emailCellElements];
    arrayEmails.forEach(email => {
        if(inputEmail.value === email.textContent){
            email.parentElement.remove();
            result.textContent = 'Deleted.';
        }else{
            result.textContent = 'Not found.';
            
        }
    });
    inputEmail.value = '';
}