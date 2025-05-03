const API_KEY = "7fb0aa74cd88563a9e45e51a2f1a0f64";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText= `지역 : ${data.name}`; 
        weather.innerText = `날씨 ${data.weather[0].main} / 온도 : ${data.main.temp}`;
    });
    console.log("패치완료");
}

function onGeoErr() {
  alert("위치와 날씨정보를 가져오는데 실패했습니다.");
}

//내위치 찾기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
