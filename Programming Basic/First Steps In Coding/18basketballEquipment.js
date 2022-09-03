function basketBallEquipment(input){

    let taxYear = Number(input[0]);
    let sneakers = taxYear * 0.6;
    let dress = sneakers * 0.8;
    let ball = dress / 4;
    let accessories = ball / 5;
    let totalPrice = taxYear + sneakers + dress + ball + accessories;
    
    console.log(totalPrice);
}
basketBallEquipment(["365 "]);