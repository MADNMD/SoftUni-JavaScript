function previousDay(year, month, day){

    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    let previousDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    console.log(previousDate);
}
previousDay(2016, 10, 1);