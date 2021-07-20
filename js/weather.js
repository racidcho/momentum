

function onGeoOk(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4800384&lon=127.0054912&appid=49c543562322d9cfbb1df84a20f24701`;


  fetch(url).then(Response => Response.json()).then(data => {
    const day = data.weather[0].main;
    const weatherDiv = document.querySelector("#weather span:last-child");
    weatherDiv.innerText = data.weather[0].main;
    console.log(data.weather[0].main);
  });
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);