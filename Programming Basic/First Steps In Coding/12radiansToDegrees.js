function radiansToDegrees(input){

    let degrees = Number(input[0]);
    let degreesRadiana = (degrees *  180) / Math.PI;
    console.log(degreesRadiana);
 }
 radiansToDegrees(["3.1416"]);