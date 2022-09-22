function extractEmails(text) {
    //let regex = /(?<!\S)[A-Za-z]+([\.\-\_]*[A-Za-z]+)*@[A-Za-z]+([\.\-\_]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let regex = /[A-Za-z]+([\.\-\_]*[A-Za-z]+)*@[A-Za-z]+([\.\-\_\*[A-Za-z]+)*/g;
    let validEmail = text.match(regex);
    validEmail.forEach(email => console.log(email));
}
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);