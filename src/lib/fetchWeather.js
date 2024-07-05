import { fetchWeatherApi } from 'openmeteo';

const fetchWeather = async () => {
  const params = {
    latitude: [48.8534],
    longitude: [2.3488],
    hourly: ["weather_code", "is_day","temperature_2m"],
    forecast_hours: 1,
  };
  const url = "https://api.open-meteo.com/v1/forecast";

  try {
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];
    const hourly = response.hourly();

    const weatherData = {
      hourly: {
        temperature_2m: hourly.variables(2).valuesArray(),
        weather_code: hourly.variables(0).valuesArray(),
        is_Day: hourly.variables(1).valuesArray(),
      },
    };
    console.log(weatherData)

    return weatherData;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error;
  }
};

export default fetchWeather;
