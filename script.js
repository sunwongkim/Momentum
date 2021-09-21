const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__login-input");
const loginButton = document.querySelector(".login-form__login-button");
const greeting = document.querySelector(".greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

// greeting .3rd / localStorage-username 노출
function showGreeting(getUserName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = "hello " + getUserName;
}

// greeting .2nd / localStorage-username 저장
function saveUserName(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting(loginInput.value);
  // greeting.innerHTML = "hello " + loginInput.value;
}

// greeting .1st / localStorage-username 판별
const referUserName = localStorage.getItem(USERNAME_KEY);
if (referUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", saveUserName);
} else {
  showGreeting(referUserName);
}

// localStorage 삭제 버튼----------
const deleteButton1 = document.querySelector(".delete-button");
function deleteUserName() {
  localStorage.clear();
}
deleteButton1.addEventListener("click", deleteUserName);
