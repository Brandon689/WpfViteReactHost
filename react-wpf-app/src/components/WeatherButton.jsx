import React, { useState } from 'react';

function WeatherButton() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://localhost:7000/WeatherForecast'); // Adjust the port if different
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h3>Weather Forecast:</h3>
          <ul>
            {weatherData.map((forecast, index) => (
              <li key={index}>
                Date: {forecast.date}, Temperature: {forecast.temperatureC}°C / {forecast.temperatureF}°F
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeatherButton;
