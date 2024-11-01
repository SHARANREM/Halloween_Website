const musicBlock = document.getElementById('Music');
const musicimg = document.getElementById('plbtn');
const backgroundMusic = document.getElementById('backgroundMusic');

musicBlock.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        musicimg.src = '/images/pause.png'
        backgroundMusic.play();
    } else {
        musicimg.src = '/images/play.png'
        backgroundMusic.pause();
    }
});
document.getElementById("home").onclick = function () {
    window.location.href = "/pages/Land.html";
};