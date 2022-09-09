function cinema(input) {

    let project = input[0];
    let rows = Number(input[1]);
    let colons = Number(input[2]);

    let sum = 0;

    if(project == "Premiere"){
        sum = rows * colons * 12;
        console.log(sum.toFixed(2));

    }else if (project == 'Normal'){
        sum = rows * colons * 7.50;
        console.log(sum.toFixed(2));
    }else if(project == 'Discount'){
        sum = rows * colons * 5;
        console.log(sum.toFixed(2));
    }
}
cinema((["Premiere","10","12"]));