function freeShiping(order) {

    let isFreeShiping = Object.values(order).reduce((a, b) => a + b, 0) > 50;
    console.log(isFreeShiping);



    // let allSumOrder = 0;
    // let values = Object.values(order);
    // for(let price of values ){
    //    allSumOrder += price;
    // }
    // if(allSumOrder < 50){
    //     console.log(`false`);
    // }else {
    //     console.log(`true`);
    // }
}
freeShiping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });