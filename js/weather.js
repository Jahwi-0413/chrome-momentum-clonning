const API_KEY = "1432af0789b31c44b0161097d79ee363"

async function onGeoOk(position){     //position -> GeolocationPosition obj
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  
  weather.innerText = `${data.weather[0].main.toLowerCase()} / ${data.main.temp} °C`;
  city.innerText = data.name;
}

function onGeoError(){
  alert("Can't find you. no weahter for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);