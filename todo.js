const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function asd(event) {
  event.preventDefault();
  localStorage.setItem("todo", toDoInput.value);
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", asd);

// ----------
const deleteButton2 = document.querySelector("#Delete2");
function deleteToDo() {
  localStorage.removeItem("todo");
}
deleteButton2.addEventListener("click", deleteToDo);
