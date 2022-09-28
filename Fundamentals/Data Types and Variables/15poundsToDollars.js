function poundsToDollars(pounds){
    let oneDollar = 1.31;
    let change = pounds * oneDollar;
    console.log(change.toFixed(3));
}
poundsToDollars(80);