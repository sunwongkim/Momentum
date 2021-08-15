const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#loginInput");
const loginButton = document.querySelector("#loginButton");
const greeting = document.querySelector("#greeting");
const button = document.querySelector("button");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function showGreeting() {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = "hello " + referUserName;
}

function inputUserName(event) {
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting();
}

const referUserName = localStorage.getItem(USERNAME_KEY);
if (referUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", inputUserName);
} else {
  showGreeting();
}

// ----------
function deleteData() {
  localStorage.removeItem(USERNAME_KEY);
}
button.addEventListener("click", deleteData);
