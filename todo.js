const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo() {
  console.log("asdsad");
}

function printToDo(toDoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = toDoInputValue;
  const button = document.createElement("button");
  button.innerHTML = "X";
  button.addEventListener("click", deleteToDo);
  toDoList.append(li);
  li.append(span);
  li.append(button);
}

function saveToDo(event) {
  event.preventDefault();
  const toDoInputValue = toDoInput.value;
  localStorage.setItem("todo", toDoInputValue);
  toDoInput.value = "";
  printToDo(toDoInputValue);
}

toDoForm.addEventListener("submit", saveToDo);

// ----------
// const deleteButton2 = document.querySelector("#DeleteToDo");
// function deleteToDo() {
//   localStorage.removeItem("todo");
// }
// deleteButton2.addEventListener("click", deleteToDo);
