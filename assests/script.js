const musicBlock = document.getElementById('plpa');
const musicBlock2 = document.getElementById('plpas');
const backgroundMusic = document.getElementById('backgroundMusic');

musicBlock.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});
musicBlock2.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});