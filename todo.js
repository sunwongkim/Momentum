const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// todo - 3 / localStorage 제거
function deleteToDo(event) {
  console.log(event.target.parentElement);
  event.target.parentElement.remove();
}

// todo-list - 2 / localStorage 생성
function printToDo(toDoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = toDoInputValue;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  toDoList.append(li);
  li.append(span);
  li.append(button);
}

// todo-list - 1 / localStorage 저장
function saveToDo(event) {
  event.preventDefault();
  const toDoInputValue = toDoInput.value;
  localStorage.setItem("todo", toDoInputValue);
  toDoInput.value = "";
  printToDo(toDoInputValue);
}

// todo-list 이벤트 시작
toDoForm.addEventListener("submit", saveToDo);

// ----------
// const deleteButton2 = document.querySelector("#DeleteToDo");
// function deleteToDo() {
//   localStorage.removeItem("todo");
// }
// deleteButton2.addEventListener("click", deleteToDo);
