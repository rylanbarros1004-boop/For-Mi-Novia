let music = document.getElementById("bg-music");
let playBtn = document.getElementById("play-btn");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

// Play/Pause toggle
function togglePlay() {
  if (music.paused) {
    music.play();
    playBtn.innerText = "⏸";
  } else {
    music.pause();
    playBtn.innerText = "▶";
  }
}

// Stop button
function stopMusic() {
  music.pause();
  music.currentTime = 0;
  playBtn.innerText = "▶";
}

// Update progress bar
music.addEventListener("timeupdate", () => {
  progress.max = music.duration;
  progress.value = music.currentTime;
});

// Seek music position
progress.addEventListener("input", () => {
  music.currentTime = progress.value;
});

// Volume control
volume.addEventListener("input", () => {
  music.volume = volume.value;
});

// Love Message
function loveMessage() {
  const messages = [
    "I love you more than words can say ❤️",
    "You are my everything 💕",
    "Forever and always, it’s you 💍",
    "You make my world brighter 🌎✨",
    "Eres mi sol, mi luna, y todas mis estrellas 🌙☀️⭐"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}
// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
  }
}
// Close menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById("nav-links");
    nav.style.display = "none";
  });
});     