const clock = document.querySelector("h2#clock");

function clocks() {
    const day = new Date; 
    
    if (day.getSeconds() === 0) {
        const zero = day.getSeconds() +0 ;    
    }
    clock.innerText = `${day.getHours()}:${day.getMinutes()}:${zero}`;
}
clocks();
setInterval(clocks, 1000);


