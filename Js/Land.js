document.getElementById(`menu`).addEventListener('click',()=>{
    document.getElementById(`sidebar`).style.display='flex';
})
document.getElementById(`close`).addEventListener('click',()=>{  
    document.getElementById(`sidebar`).style.display='none';
})
const musicBlock = document.getElementById('Music');
musicBlock.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});
document.getElementById("history").onclick = function () {
    window.location.href = "/pages/History.html";
};
document.getElementById("costume").onclick = function () {
    window.location.href = "/pages/Costumes.html";
};
document.getElementById("fun").onclick = function () {
    window.location.href = "/pages/Games.html";
};
document.getElementById("food").onclick = function () {
    window.location.href = "/pages/Food.html";
};