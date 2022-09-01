const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){    //SubmitEvent{} - 모든 evenet
  event.preventDefault();     //새로고침을 막음
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreeting(userName);
}

function paintGreeting(username){
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //enter, button 클릭시 자동 submit
  //괄호를 쓰지 않은 함수 표현은 함수를 즉시 실행
  loginForm.addEventListener("submit", onLoginSubmit);   
}
else{
  //show the greetings
  paintGreeting(savedUserName)
}


// function handleLinkClick(event){    //mouse event
//   event.preventDefault();      //a tag의 이동을 막고 있음
//   // alert("clicked");         //alert는 모든 동작을 멈춤
// }

// link.addEventListener("click", handleLinkClick);