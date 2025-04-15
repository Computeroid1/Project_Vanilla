const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weather-info');
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

//Fetch weather data on the city entered from the openweathermap API when the search button is clicked
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
  } else {
    alert('Please enter a city name.');
  }
});

//Fetch weather data from the API
async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
  }
}

//Display weather data on the page
function displayWeatherData(data) {
  const { name, main, weather, wind } = data;
  const temperature = main.temp;
  const condition = weather[0].description;
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  weatherInfo.innerHTML = `
    <p><strong>City:</strong> ${name}</p>
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
  `;
}