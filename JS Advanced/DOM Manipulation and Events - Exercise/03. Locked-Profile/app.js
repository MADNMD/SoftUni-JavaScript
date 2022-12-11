function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));

    function onClick(event){
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[value="unlock"]').checked;
        
        if(isActive){
            const info = Array.from(profile.querySelectorAll('div'))
            .find(div => div.id.includes('HiddenFields'));
            
            if(event.target.textContent === 'Show more'){
                event.target.textContent = 'Hide it';
                info.style.display = 'block';
            }else{
                event.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}