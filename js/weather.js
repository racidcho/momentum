function onGeoOk(position) {
  let ff = function () {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=49c543562322d9cfbb1df84a20f24701`;
  fetch(url).then(Response => Response.json()).then(data => {
    const day = data.weather[0].main;
    const weatherDiv = document.querySelector("#weather span:last-child");
    const weatherDiv2 = document.querySelector("#weather span:first-child");
    const temp = data.main.temp-273.15;
    console.log(day);
    const tempFinal = temp.toFixed(1)+"도";
      if (data.weather[0].main == "Clouds") {
   
      weatherDiv.innerText = "현재 날씨는 흐립니다.";
      weatherDiv2.innerText = `현재온도는 ${tempFinal} 입니다.`;
    }
    else {
      weatherDiv.innerText = `현재 날씨는 ${data.weather[0].main}입니다.`;
      weatherDiv2.innerText = `현재온도는 ${tempFinal} 입니다.`;
    }
    
  });
  }
  ff();
  setInterval(ff, 60000);
 
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

