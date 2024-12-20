# Weather Fetcher CLI

## Description
Weather Fetcher CLI is a Node.js command-line tool that allows users to retrieve the current weather information for any city. It fetches data from the OpenWeather API and displays details such as temperature, humidity, and weather description.

## Features
- Fetches real-time weather data.
- User-friendly command-line interface.
- Provides temperature, humidity, and weather descriptions.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-fetcher-cli.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-fetcher-cli
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Obtain an API key from [OpenWeather](https://openweathermap.org/api).
2. Replace `your_openweather_api_key` in the script with your actual API key.
3. Run the application:
   ```bash
   node weather-fetcher.js
   ```
4. Enter the name of the city when prompted.

## Example
```bash
Enter the name of a city to get its current weather: London

Weather in London:
Temperature: 15°C
Feels Like: 13°C
Humidity: 72%
Description: broken clouds
```

## Dependencies
- `axios`: For making HTTP requests.
- `readline`: Built-in Node.js module for reading user input.

## License
This project is open-source and available under the MIT License.
