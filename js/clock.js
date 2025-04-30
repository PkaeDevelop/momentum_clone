const clock = document.querySelector("#clock");

function getClock() {
  const target = new Date("2025-12-25T00:00:00"); // 크리스마스 시간
  const date = new Date(); // 현재시간

  const CrsMas = target - date;
  const seconds = Math.floor(CrsMas / 1000); // 초
  const getMinutes = Math.floor(seconds / 60); // 분
  const hours = Math.floor(getMinutes / 60); // 시간
  const days = Math.floor(hours / 24); // 일

  clock.innerText = `${pad(days)}d ${pad(hours % 24)}h ${pad(
    getMinutes % 60
  )}m ${pad(seconds % 60)}s`;
}
//두자리수 표현
function pad(n) {
  return String(n).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);
