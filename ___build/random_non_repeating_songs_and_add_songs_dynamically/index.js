// Problem statement:-
// Assume you are Gaana app developer.
// feature to play a song at randon from a playlist such that the song will not get repeated.
// Also what if songs are added to the playlist dynamically.

// let's assume we've a playlist array with songs' objects (for reference I'm taking number in the array)
const playlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lastIndex = playlist.length - 1; // for keeping the last index of playlist so that I can play the song and shuffle that song to the end.

// Now we want to get a song randomly from the playlist to be played such that the song doesn't repeat.
function getSong() {
    // First checking is all the songs are played or not 
    if(lastIndex < 0) {
        console.log("All the songs are played already!");
        return;
    }

    let randomIndex = Math.floor(Math.random() * (lastIndex + 1)); // instead of playlist.length I'm taking lastIndex so that we don't loose the whole playlist array here while trying to decrease the playlist.length

    const playableSong = playlist[randomIndex]; // getting the playable song to return it.
    shufflePlaylist(randomIndex); // shuffle the current random indexed song with last indexed song.
    return playableSong;
}

// Here we want to shuffle the played song (with index currentIndex) with the last song in the array which is not played (denoted using lastIndex)
function shufflePlaylist(currentIndex) {
    let temp = playlist[currentIndex];
    playlist[currentIndex] = playlist[lastIndex];
    playlist[lastIndex] = temp;
    
    // After shuffling the current indexed song with last indexed song, reduce the last index so that the last played song will be ignored.
    lastIndex -= 1;
}

// Now to dynamically add a new song into the playlist while the songs are being played.
function addSong(song) {
    lastIndex += 1;
    playlist.splice(lastIndex, 0, song); // Here, after updating the lastIndex, I'm adding the new song without deleting any songs from the playlist, so that the last accessible song in the playlist (which are not played till now) is this newly added song.
}

console.log(getSong());
console.log(getSong());
addSong(11);
console.log(getSong());
console.log(getSong());
addSong(12);
console.log(getSong());
addSong(13);
console.log(getSong());
console.log(getSong());
console.log(getSong());
addSong(14);
console.log(getSong());
console.log(getSong());
console.log(getSong());
console.log(getSong());
console.log(getSong());
console.log(getSong());
console.log(getSong());
