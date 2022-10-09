function movieDay(input) {

    let timePicture = Number(input[0]);
    let cunterScenes = Number(input[1]);
    let timeScenes = Number(input[2]);

    let podgotovkaNateren = timePicture * 0.15;
    let timeFotoScenes = cunterScenes * timeScenes;
    let allTime = podgotovkaNateren + timeFotoScenes;

    if (timePicture >= allTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timePicture - allTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(allTime - timePicture)} minutes.`);
    }
}
movieDay(["120", "10", "11"]);