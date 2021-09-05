const API_KEY = "9a1734badca6cd605f1a98268cf67962";

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
  console.log(position);
  console.log("you live in", lat, ",", lon);
  console.log(url);
}
function error() {
  console.log("bad");
}

navigator.geolocation.getCurrentPosition(success, error);
