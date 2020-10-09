/*
 Weather App
 */

// API_KEY 
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const newUrl = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  fetch(newUrl)
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    showWeatherData(data);
  })
  .catch((err)=>{
    alert("Please enter the valid city name");
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city);
}

showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('temp').innerText =weatherData.main.temp + "°"  ;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  document.getElementById('weather-description').innerText =weatherData.weather[0].description ;
  document.getElementById('humidity').innerText = weatherData.main.humidity;
  document.getElementById('clouds').innerText = weatherData.clouds.all;
  document.getElementById('wind-speed').innerText = weatherData.wind.speed;


}

