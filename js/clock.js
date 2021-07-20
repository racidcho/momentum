const clock = document.querySelector("h2#clock");

function clocks() {
    const day = new Date; 
    const hours = String(day.getHours()).padStart(2, "0");
    const min = String(day.getMinutes()).padStart(2, "0");
    const sec = String(day.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}
clocks();
setInterval(clocks, 1000)