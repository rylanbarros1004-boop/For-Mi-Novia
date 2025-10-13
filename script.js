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
    "Te Amo mucho mucho mucho Mi Amor 😍",
    "I Love You so so so so fucking much 😘",
    "Eres mi sol, mi luna, y todas mis estrellas 🌙☀️⭐",
    "Mahal Kita, Mahal Ko 💖",
    "You Are My Emergency Contact ❤️‍🔥"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");

  // Toggle dropdown menu
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Change menu icon between ☰ and ✕
    menuBtn.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
  });

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.textContent = "☰";
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("show");
      menuBtn.textContent = "☰";
    }
  });

  // Example function for your love button
  window.loveMessage = function() {
    alert("I love you, my beautiful Angel! 💖");
  };
});
