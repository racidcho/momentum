const todoForm = document.getElementById("todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const toggleb = document.querySelector("#todo-form button");
const hiddenOff = document.querySelector("#hiddenOff");

//리스트 삭제
function todoDel (event) {
  const li = event.target.parentElement;
  
  li.classList.toggle("liTransition");
  // function syncDelay(milliseconds){
  //   var start = new Date().getTime();
  //   var end=0;
  //   while( (end-start) < milliseconds){
  //       end = new Date().getTime();
  //   }
  //  }
  //  syncDelay(5000);
  li.remove();
  var audio = new Audio('2.m4a');
  audio.play();
  const ddd = document.getElementsByClassName('todoNumber');
  //console.log("길이 : "+ ddd.length);
  for (var i=0; i<ddd.length;i++) {
    ddd[i].innerText = i+1;
  }

  const todospan = document.getElementById('todonum');

  const a =document.getElementsByTagName("li").length;
  if (a !== 0) {
    todospan.innerText = `할 일 ${a}개 남음`;
    } else {
      todospan.innerText = "";
    }
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  TodoSaveLocal();
}

let toDos = [];

function TodoLi (TodoObj) {
  const li = document.createElement("li");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const button = document.createElement("button");
  li.id = TodoObj.id;
 
  var bb =document.getElementsByTagName("li").length;
  var bb = bb+1;
    span1.innerText = bb;
    span2.innerText = TodoObj.text;
  button.innerText = "❌";
  li.appendChild(span1);
  li.appendChild(span2);
  li.appendChild(button);
  todoList.appendChild(li);
  span1.className = "todoNumber"
  const a =document.getElementsByTagName("li").length;
  const todospan = document.getElementById('todonum');
  if (a !== 0) {
  todospan.innerText = `할 일 ${a}개 남음`;
  } else {
    todospan.innerText = "";
  }
  button.addEventListener("click" ,todoDel);
}

function TodoSaveLocal () {
  
  localStorage.setItem("todo", JSON.stringify(toDos));
  
}

const todoLocal = localStorage.getItem("todo");
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
  // const todospan = document.querySelector("#todo-form span");
  // const a =document.getElementsByTagName("li").length;
  // console.log(a);
  // todospan.innerText = a;
}

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
// todoInput.addEventListener("submit" , )
todoForm.addEventListener("submit" ,handleTodoSubmit);
toggleb.addEventListener("click", function() {
  document.querySelector(".container").classList.toggle("section")
  if (hiddenOff.id == "hiddenOff") {
    hiddenOff.id = "hiddenOn";
  } else {
    const hiddenOn = document.getElementById("hiddenOn");
    hiddenOn.id = "hiddenOff";
  }
});