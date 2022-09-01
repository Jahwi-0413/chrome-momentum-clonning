const clock = document.querySelector("#clock");

function getClock(){
  const date= new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML= `${hours}:${minutes}:${seconds}`;
}
getClock()    //새로고침시 1초를 기다리지 않기 위해서
setInterval(getClock, 1000);

//intervers - 매번 일어나야 하는것
// setInterval(sayHello, 5000);   //function, ms
//time out
// setTimeout(sayHello, 5000);    //5초 뒤에