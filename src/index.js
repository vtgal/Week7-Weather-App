function refreshWeather() {
let temperatureElement = response.data.temperature.current;
}



function searchCity(city) {
let apiKey = "6e4744f50a4o233acde7cb8355a181t3";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);