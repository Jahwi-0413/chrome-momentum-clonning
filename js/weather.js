const API_KEY = "1432af0789b31c44b0161097d79ee363"

function onGeoOk(position){     //position -> GeolocationPosition obj
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response=> response.json()
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main.toLowerCase()} / ${data.main.temp} °C`;
    }));
}

function onGeoError(){
  alert("Can't find you. no weahter for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);