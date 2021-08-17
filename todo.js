const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function printToDo(toDoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.querySelector("button");
  toDoList.append(li);
  li.append(span);
  li.append(button);

  span.innerHTML = toDoInputValue;
  console.log(li);
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
const deleteButton2 = document.querySelector("#DeleteToDo");
function deleteToDo() {
  localStorage.removeItem("todo");
}
deleteButton2.addEventListener("click", deleteToDo);
