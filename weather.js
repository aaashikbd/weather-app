// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=de3cae605e426a3c444355e3d11365ce

const apiKey = "de3cae605e426a3c444355e3d11365ce";

const btn = document.getElementById("btn");

let url = "";

// let url =
//   "https://api.openweathermap.org/data/2.5/weather?q=chittagong&appid=" +
//   apiKey;

btn.addEventListener("click", function (e) {
  const searchCity = document.getElementById("city").value;
  url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchCity +
    "&appid=" +
    apiKey;
  main();
});

function main() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cityName = data.name;

      const temp = Math.round(data.main.feels_like - 273.15);

      const windSpeed = Math.round(data.wind.speed * 2.236936);

      const humidity = data.main.humidity;

      const weatherIcon = data.weather[0].icon;

      const iconUrl =
        "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

      const weatherCond = data.weather[0].main;
      const weatherDescp = data.weather[0].description;
      // add all details
      detail(iconUrl, cityName, temp, humidity, windSpeed, weatherDescp);
    })
    .catch((err) => {
      document.getElementById("city").value = "";
      document.getElementById("error").textContent =
        "Please enter a valid City name!";
    });
}
//////////////////// detail function//////////////
function detail(icon, city, temp, humidity, speed, description) {
  // empty any error message
  document.getElementById("error").textContent = "";

  // insert icon
  document.getElementById("condIcon").setAttribute("src", icon);

  //city
  document.getElementById("cityname").textContent = city;
  //Temperature
  document.getElementById("wtemp").textContent = temp;
  //humidity
  document.getElementById("humidity").textContent = humidity;
  //wind speed
  document.getElementById("wind-speed").textContent = speed;
  // description
  document.getElementById("weather-description").textContent = description;
}
/////////////////////////////////////////////////////
