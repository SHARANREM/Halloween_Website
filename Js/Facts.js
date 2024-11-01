const musicBlock = document.getElementById('Music');
musicBlock.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.volume = 0.1;
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (!body.classList.contains("dark-mode")) {
        body.style.backgroundImage = "url('/assests/bg2.jpeg')";
        themeToggle.src = "/assests/sun.png"; 
    } else {
        body.style.backgroundImage = "url('/assests/bg4.jpeg')";
        themeToggle.src = "/assests/moon.png";
    }
});