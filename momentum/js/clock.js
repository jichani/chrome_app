const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이게 없다면 처음엔 시간이 없다가 1초 뒤에 시간이 나타난다.
setInterval(getClock, 1000); // 정한시간인 1000ms(1s)마다 getClock() function을 실행한다. 시간 업데이트 