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
