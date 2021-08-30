const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
// todo .3rd / localStorage-todo 제거
function deleteToDo(event) {
  console.log(event.target.parentElement);
  event.target.parentElement.remove();
  console.log(toDos);
}

// todo-list .2nd / localStorage-todo 생성
function printToDo(toDoInputValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = toDoInputValue;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  toDoList.append(li);
  li.append(span);
  li.append(button);
  button.addEventListener("click", deleteToDo);
}

let toDos = [];

// todo-list .1st / localStorage-todo 저장
function saveToDo(event) {
  event.preventDefault();
  const toDoInputValue = toDoInput.value;
  toDos.push(toDoInputValue);
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  toDoInput.value = "";
  printToDo(toDoInputValue);
  // console.log(toDos);
  // console.log(localStorage.getItem(TODOS_KEY));
}

// todo-list 이벤트 시작
toDoForm.addEventListener("submit", saveToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printToDo);
}

// ----------
// const deleteButton2 = document.querySelector("#DeleteToDo");
// function deleteToDo() {
//   localStorage.removeItem("todo");
// }
// deleteButton2.addEventListener("click", deleteToDo);
