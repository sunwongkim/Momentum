const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#loginInput");
const loginButton = document.querySelector("#loginButton");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  const InputValue = loginInput.value;

  console.log(InputValue);
  loginInput.value = "";
  loginForm.classList.add(HIDDEN_CLASSNAME);
  h1.innerHTML = "hello " + InputValue;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);
