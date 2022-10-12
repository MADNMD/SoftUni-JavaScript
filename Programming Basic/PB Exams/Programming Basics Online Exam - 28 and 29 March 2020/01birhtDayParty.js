function birhtDayParty(input) {
    let rentHall = Number(input);

let cake = rentHall * 0.20;
let drinks = cake * 0.55 ;
let animation = rentHall / 3;
let allPrice = rentHall + cake + drinks + animation;

console.log(allPrice);
}
birhtDayParty(2250);