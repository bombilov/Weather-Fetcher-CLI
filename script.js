onst axios = require('axios');
const readline = require('readline');

// API configuration
const API_KEY = 'your_openweather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to fetch weather data
const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    const { temp, feels_like, humidity } = response.data.main;
    const description = response.data.weather[0].description;

    console.log(`\nWeather in ${city}:`);
    console.log(`Temperature: ${temp}°C`);
    console.log(`Feels Like: ${feels_like}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Description: ${description}\n`);
  } catch (error) {
    console.error('\nError fetching weather data. Please ensure the city name is correct.\n');
  }
};

// Main program
const startCLI = () => {
  rl.question('Enter the name of a city to get its current weather: ', (city) => {
    if (city) {
      fetchWeather(city).then(() => rl.close());
    } else {
      console.log('City name cannot be empty. Please try again.');
      startCLI();
    }
  });
};

startCLI();
