function oscarsCeremony(input) {

    let rentHall = Number(input[0]);

    let statue = rentHall * 0.7;
    let catering = statue * 0.85;
    let sound = catering * 0.5;

    let allPrice = rentHall + statue + catering + sound;

    console.log(allPrice.toFixed(2));

}
oscarsCeremony(["3500"]);