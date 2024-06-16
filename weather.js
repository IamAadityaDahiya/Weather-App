document.getElementById("getweatherbtn").addEventListener("click", function () {
  const city = document.getElementById("cityinput").value;
  const apiKey = "a92061db0967c762cc515f5df2a8ef5b";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("cityname").innerText = `City: ${data.name}`;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById(
          "description"
        ).innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById(
          "humidity"
        ).innerText = `Humidity: ${data.main.humidity} %`;
        document.getElementById(
          "windspeed"
        ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
      } else {
        document.getElementById("cityname").innerText = "City Not Found";
        document.getElementById("temperature").innerText = "";
        document.getElementById("description").innerText = "";
        document.getElementById("humidity").innerText = "";
        document.getElementById("windspeed").innerText = "";
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});