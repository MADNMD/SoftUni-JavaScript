function addBags(input){

    let priceLuggageAbove20 = Number(input[0]);
    let kgLuggage = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let luggageCounter = Number(input[3]);

    if(kgLuggage < 10){
        priceLuggageAbove20 *= 0.2;
    }else if(kgLuggage <= 20){
        priceLuggageAbove20 *= 0.5;
     } //else if(kgLuggage > 20){
    //     priceLuggageAbove20 = priceLuggageAbove20;
    //  }

    if(daysToTrip > 30){
        priceLuggageAbove20 *= 1.10;
    }else if(daysToTrip >= 7 && daysToTrip <= 30){
        priceLuggageAbove20 *= 1.15;
    }else if(daysToTrip < 7){
        priceLuggageAbove20 *= 1.40;
    }

    let allPrice = priceLuggageAbove20 * luggageCounter;

    console.log(`The total price of bags is: ${allPrice.toFixed(2)} lv.`);
}
addBags(["30","18","15","2"]);