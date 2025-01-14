// Select temperature display and buttons
const tempValueElement = document.getElementById('tempValue');
const increaseTempButton = document.getElementById('increaseTemp');
const decreaseTempButton = document.getElementById('decreaseTemp');

// Initial temperature
let temperature = 78;

// Update the temperature display
function updateTemperatureDisplay() {
    tempValueElement.textContent = `${temperature}°F`;
}

// Event listeners for buttons
increaseTempButton.addEventListener('click', () => {
    if (temperature < 90) {
        temperature += 1;
        updateTemperatureDisplay();
    } else {
        console.log("Temperature cannot exceed 90°F.");
    }
});

decreaseTempButton.addEventListener('click', () => {
    if (temperature > 60) {
        temperature -= 1;
        updateTemperatureDisplay();
    } else {
        console.log("Temperature cannot go below 60°F.");
    }
});

// Initial temperature display
updateTemperatureDisplay();

// Music control elements
const playMusicButton = document.getElementById('playMusic');
const pauseMusicButton = document.getElementById('pauseMusic');
const stopMusicButton = document.getElementById('stopMusic');
const nextTrackButton = document.getElementById('nextTrack');
const songTextElement = document.getElementById('songText');
const audioPlayer = document.getElementById('audioPlayer');

// Array of songs (update these paths with your converted .mp3 or .wav files)
const songs = [
    { title: "KEY OF HEART", file: "music/보아(BoA) - KEY OF HEART (Korean Ver.).mp3" },
    { title: "Milky Way", file: "music/보아(BoA) - Milky Way.mp3" },
    { title: "Time To Begin", file: "music/보아(BoA) - Time To Begin.mp3" },
    { title: "Double", file: "music/보아(BoA) - Double.mp3" }
];

// Current song index
let currentSongIndex = 0;

// Function to load and display the current song
function loadSong() {
    const currentSong = songs[currentSongIndex];
    audioPlayer.src = currentSong.file; // Set the audio source
    songTextElement.textContent = `Now Playing: ${currentSong.title}`;
    console.log(`Loading song: ${currentSong.file}`);
}

// Event listeners for music controls
playMusicButton.addEventListener('click', () => {
    audioPlayer.play();
    console.log(`Playing: ${songs[currentSongIndex].title}`);
    songTextElement.textContent = `Now Playing: ${songs[currentSongIndex].title}`;
});

pauseMusicButton.addEventListener('click', () => {
    audioPlayer.pause();
    console.log(`Paused: ${songs[currentSongIndex].title}`);
    songTextElement.textContent = "Music Paused";
});

stopMusicButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset the audio to the start
    console.log(`Stopped: ${songs[currentSongIndex].title}`);
    songTextElement.textContent = "Music Stopped";
});

nextTrackButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move to the next song
    loadSong();
    audioPlayer.play(); // Automatically play the next song
    console.log(`Next track: ${songs[currentSongIndex].title}`);
});

// Load the initial song
loadSong();
