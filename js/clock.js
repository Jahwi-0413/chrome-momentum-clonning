const clock = document.querySelector("#clock");

function getClock(){
  const date= new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return`${hours}:${minutes}`;
}

function setClock(){
  clock.innerText = getClock();
  clock.classList.remove(HIDDEN_CLASSNAME);
}

function runClock(){
  setClock();
  setInterval(setClock, 1000);    //새로고침시 1초를 기다리지 않기 위해서
}

if(savedUserName!==null){
  runClock();
}
//intervers - 매번 일어나야 하는것
// setInterval(sayHello, 5000);   //function, ms
//time out
// setTimeout(sayHello, 5000);    //5초 뒤에