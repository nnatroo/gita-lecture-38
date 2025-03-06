const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfoDiv = document.querySelector(".weather-info");

const API_KEY = "408dba0b0d1f4f539f8171727250403"
let cityName = "Tbilisi"


button.addEventListener("click", (e) => {

  cityName = input.value;
  getWeather(input.value);
})

const getWeather = async (city) => {
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    weatherInfoDiv.innerHTML = `
    <h3>${json.location.name}, ${json.location.country}</h3>
    <img src=${json.current.condition.icon}>
    <h2>${json.current.temp_c}°C</h2>
    <h4>${json.current.condition.text}</h4>
    <p>Humidity: ${json.current.humidity}%</p>
    <p>Wind: ${json.current.wind_kph}Kph</p>
    `;
  } catch (error) {
  }

};
