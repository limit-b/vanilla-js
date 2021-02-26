const weatherSpan = document.querySelector('.js-weather');

const API_KEY = 'a104b0b7a87e780f028fb9c088bc3287';
const COORDS = 'coords';

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(apiCall)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = Math.floor(json.main.temp);
      const place = json.name;
      weatherSpan.textContent = `${temperature}℃ @ ${place}`;
    });
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('Cant access geo location');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
  setTimeout(function () {
    location.reload();
  }, 1000 * 60 * 5);
}

init();
