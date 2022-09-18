const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector("#todo-list");
const questionContainer = document.querySelector(".todo-question-container");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  //event.target -> event가 발생한 target
  //event.target.parentNode
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id!==parseInt(li.id));  //toDo.id->num, li.id->
  saveToDos();
  li.style.textDecoration = "line-through";
  setTimeout(function(){
      li.remove();
  }, 2000);
}

function paintToDo(newToDo){    //obj
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function onKeyUpToDo(event){
  if(event.keyCode===13){
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text : newToDo,
    id:Date.now()
  };
  toDos.push(newToDoObj);

  paintToDo(newToDoObj);
  saveToDos();
  }
}
toDoInput.addEventListener("keyup", onKeyUpToDo);

if(savedUserName!==null){   //사용자가 등록되어 있을때만
  const savedToDos = localStorage.getItem(TODOS_KEY);
  questionContainer.classList.remove("todo-question-container-hide");
  if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}