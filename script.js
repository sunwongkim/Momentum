const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function ckickLonInButton() {
  const value = loginInput.value;
  console.log(value);
  loginInput.value = "";
}

loginButton.addEventListener("click", ckickLonInButton);
