const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function todoDel (event) {
  const li = event.target.parentElement;
  li.remove();
 
}

let toDos = [];

function TodoLi (saveTodoInput) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = saveTodoInput;
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  todoList.addEventListener("click" ,todoDel);
}

function TodoSaveLocal () {
  localStorage.setItem("todo", JSON.stringify(toDos));
}

function handleTodoSubmit (event) {
  event.preventDefault();
  const saveTodoInput = todoInput.value;
  toDos.push(saveTodoInput);
  todoInput.value = "";
  TodoLi (saveTodoInput);
  TodoSaveLocal ();
}

const todoLocal = localStorage.getItem("todo");
if (todoLocal !== null) {
  const parsedToDos = JSON.parse(todoLocal);
  toDos = parsedToDos;
  parsedToDos.forEach(TodoLi);
}

todoForm.addEventListener("submit" ,handleTodoSubmit);

