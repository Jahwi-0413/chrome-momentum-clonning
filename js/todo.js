const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
  //event.target -> event가 발생한 target
  //event.target.parentNode
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  
  const span = document.createElement("span");
  span.innerText = newToDo;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handelToDoSubmit(event){
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handelToDoSubmit);