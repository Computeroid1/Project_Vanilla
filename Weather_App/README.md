# Weather App

A simple and responsive web app that displays the current weather information of any city using the OpenWeatherMap API.

## Features

- Search for weather information by city name
- Display of current temperature in Celsius
- Weather condition description
- Humidity percentage
- Wind speed in meters per second
- Responsive design that works on mobile and desktop

## Demo Screenshot

![weather-app screenshot](<Screenshot 2025-04-15 212341.png>)
![weather-app screenshot](<Screenshot 2025-04-15 212411.png>)
![weather-app screenshot](<Screenshot 2025-04-15 212741.png>)

## Installation
```bash
1. Clone this repository to your local machine:
   git clone https://github.com/Computeroid1/Project_Vanilla.git
   
2. Navigate to the project directory:
   cd Weather_App
   
3. Open `script.js` and replace the placeholder API key with your own:
   const apiKey = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key

4. Open `index.html` in your web browser to use the application.
```

## Getting an API Key

To use this application, you'll need to obtain a free API key from OpenWeatherMap:

1. Sign up for a free account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
2. After logging in, go to your API keys section
3. Generate a new API key `You might need to subscribe to a package, usually €0.00`
4. Copy the key and paste it into the `script.js` file

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - CSS styling for the application
- `script.js` - JavaScript functionality for fetching and displaying weather data

## How It Works

1. The user enters a city name in the input field
2. Upon clicking the "Search" button, the application sends a request to the OpenWeatherMap API
3. The application retrieves and displays the current weather data for the specified city
4. If the city is not found or there's an API error, an appropriate error message is displayed

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

## Author

Ugochukwu Chibuzor

## Acknowledgements

- Background gradient design from [CSS Gradient](https://cssgradient.io/gradient-backgrounds/)
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)