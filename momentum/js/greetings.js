const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // hidden을 2번 사용하니 변수로 지정해준다. 이런 것은 대문자로 저장
const USERNAME_KEY = "username"; // string 값을 2번 이상 사용할 때 오타가 날 수 있으니 변수로 선언해주는 것이 매우 중요하다.

function onLoginSubmit(event) {
    event.preventDefault(); // event가 원래 하는 행동을 멈춘다. (submit하면 자동으로 새로고침되는 것을 막아준다.)
    loginForm.classList.add(HIDDEN_CLASSNAME); //form을 숨겨준다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localStorage는 "username"이라는 key에 value를 저장해둔다.
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `HI ${username}! HAVE A GOOD DAY`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에서 hidden이라는 class명을 제거하여 h1을 표시한다.
}

loginForm.addEventListener("submit", onLoginSubmit); // 트래쉬 코드?

const savedUsername = localStorage.getItem(USERNAME_KEY); // first step, local storage를 확인한다.

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}