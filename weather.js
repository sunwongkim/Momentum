// 날씨 조회
// https://openweathermap.org/
const API_KEY = "9a1734badca6cd605f1a98268cf67962";

// 지리 좌표를 이용한 현재 날씨 조회
function success(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //&units=metric은 화씨=>섭씨 표기
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main + "  " + data.main.temp;
    });
}

function error() {
  console.log("error");
}

// 지리 좌표 불러오기
navigator.geolocation.getCurrentPosition(success, error);
