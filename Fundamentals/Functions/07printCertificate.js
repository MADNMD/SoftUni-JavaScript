function printCertificate(grade, names) {
    if(pass(grade)){
        printHeader();
        printName(names);
        formatGrade(grade);
    }else{
        console.log('Student does not qualify');
    }
}
function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}


function printName(nameArr) {
    console.log(nameArr[0] + ' ' + nameArr[1]);
}

function formatGrade(number){

    let grade = number;
    let description = '';

    if(grade < 3){
        console.log('Fail (2)');
        return;
    }else if(grade < 3.50){
        description = 'Poor';
    }else if(grade < 4.50){
        description = 'Good';
    }else if(grade < 5.50){
        description = 'Very good';
    }else if(grade >= 5.50){
        description = 'Excellent';
    }
    console.log(`${description} (${grade.toFixed(2)})`);
}

function pass(grade) {
    return grade >= 3;
  }
  
printCertificate(5.25, ['Peter', 'Carter']);