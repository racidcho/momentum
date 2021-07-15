const clock = document.querySelector("h2#clock");

function clocks() {
    const day = new Date; 
   
    clock.innerText = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
}
clocks();
setInterval(clocks, 1000);


