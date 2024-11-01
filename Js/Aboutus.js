function updateElapsedTime() {
    const startDate = new Date("June 3, 2023 00:00:00");
    const now = new Date();
    const elapsed = now - startDate;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const displayHours = hours % 24;
    const displayMinutes = minutes % 60;
    const displaySeconds = seconds % 60;
    document.getElementById("elapsedTime").innerHTML = 
    `${days} Days<br>` +
                `${displayHours.toString().padStart(2, '0')} Hours<br>` +
                `${displayMinutes.toString().padStart(2, '0')} Minutes<br>` +
                `${displaySeconds.toString().padStart(2, '0')} Seconds`;
}
setInterval(updateElapsedTime, 1000);
updateElapsedTime();

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    
    if (body.classList.contains("dark-mode")) {
        themeToggle.src = "/assests/trb.png";
    } else {
        themeToggle.src = "/assests/trb.png";
    }
});
