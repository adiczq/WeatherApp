const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=f93a5582d169c719d4a93737983e0882";
const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value || "Rybnik";
  const URL = API_LINK + city + API_KEY + API_UNITS;
  axios.get(URL).then((res) => {
    const temp = res.data.main.temp;
    const hum = res.data.main.humidity;
    const status = Object.assign({}, ...res.data.weather);

    cityName.textContent = res.data.name;
    temperature.textContent = temp.toFixed(1) + "°C";
    humidity.textContent = hum + "%";
    weather.textContent = status.main;
  });
};

getWeather();
button.addEventListener("click", getWeather);
