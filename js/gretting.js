const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//로그인하고 사용자명을 보여주는 함수
function paintGreeting(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//최초 실행시 로컬스트리지에 사용자명을 저장하면서 로그인 사용자를 보여준다
function onLoginSubmit(event) {
  event.preventDefault(); //브라우저 기본동작 막기;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value; //사용자명 변수 저장
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreeting(userName)
}

//최초 동작
const saveUserName = localStorage.getItem(USERNAME_KEY);
if (saveUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreeting(saveUserName);
}