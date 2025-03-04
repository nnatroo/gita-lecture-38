const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfoDiv = document.querySelector(".weather-info");

const API_KEY = "1b40634a79db4734baf203617210410"
let cityName = "Tbilisi"
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`

button.addEventListener("click", (e) => {
  console.log("clicked");
  cityName = input.value;
  input.value = "";
})
