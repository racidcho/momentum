const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");

function todoDel (event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  TodoSaveLocal();
 
}

let toDos = [];

function TodoLi (TodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = TodoObj.id;
  span.innerText = TodoObj.text;
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
  const TodoObj = {
    text: saveTodoInput,
    id: Date.now(),
  }
  toDos.push(TodoObj);
  todoInput.value = "";
  TodoLi (TodoObj);
  TodoSaveLocal ();
  
}

const todoLocal = localStorage.getItem("todo");

if (todoLocal !== null) {
  const parsedToDos = JSON.parse(todoLocal);
  toDos = parsedToDos;
  parsedToDos.forEach(TodoLi);
}

function todoLoginCheck() {
  const saveUsernameChech = localStorage.getItem("user");
  if (saveUsernameChech === null) {
    alert("로그인을 먼저 해주세요.")
  }
}
todoInput.addEventListener("click" , todoLoginCheck);
todoForm.addEventListener("submit" ,handleTodoSubmit);

