function gramophone(band, album, song) {
    let bandName = band;
    let albumName = album;
    let songName = song;
    let durationSong = (bandName.length * albumName.length) * songName.length / 2;
    let rotations = durationSong / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');