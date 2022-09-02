function vacationBooksList(input){

    let pages = Number(input[0]);
    let pagesHours = Number(input[1]);
    let days = Number(input[2]);
    let pagesOrPagesHours = pages / pagesHours;
    let deysHours = pagesOrPagesHours / days;

    console.log(deysHours);
}
vacationBooksList(["212 ","20 ","2 "]);