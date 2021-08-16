const clock = document.querySelector("#clock");

function showTime() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const nowTime = hours + ":" + minutes + ":" + seconds;
  console.log(nowTime);
  clock.innerHTML = nowTime;
}
// setInterval(showTime, 1000);
