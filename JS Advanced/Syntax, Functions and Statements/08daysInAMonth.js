function daysInAMonth(month, year) {
    let date = new Date(year, month, 0).toDateString();
    date = date.substring(8, 10)
    console.log(date);
}
daysInAMonth(1, 2012);