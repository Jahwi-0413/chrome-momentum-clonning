// const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const LOGOUT_TEXT_SIZE = "not-login-text";
const LOGIN_TEXT_SIZE = "login-text";

function onKeyUp(event){    //SubmitEvent{} - 모든 evenet
  // event.preventDefault();     //새로고침을 막음
  if(event.keyCode===13){
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginInput.classList.add(HIDDEN_CLASSNAME);
  
    runClock();
    paintGreeting(userName);
  }
}

function paintGreeting(username){
  greeting.classList.remove(LOGOUT_TEXT_SIZE);
  greeting.classList.add(LOGIN_TEXT_SIZE);
  greeting.innerHTML = `Hi, ${username}`;
  loginInput.classList.add(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  //show the form
  loginInput.classList.remove(HIDDEN_CLASSNAME);
  //enter, button 클릭시 자동 submit
  //괄호를 쓰지 않은 함수 표현은 함수를 즉시 실행
  loginInput.addEventListener("keyup", onKeyUp);   
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