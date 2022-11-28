function deleteByEmail() {

    const inputElement = document.querySelector('input[name="email"]');
    const emailCellElements = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result');
    
    for(let info of emailCellElements){
        if(info.children[1].textContent === inputElement.value){
            // const parent = info.parentElement;    и давта варианта за премахване на детето работят.
            // parent.removeChild(info);
            info.remove();               // само с remove работи защото info  е целия ред в таблицата.
            result.textContent = 'Deleted.';
        }else{
            result.textContent = 'Not found.';
        }
    }
    inputElement.value = '';
}