import { useState, useEffect } from 'react';
import axios from 'axios';

type WeatherIconCode =
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

interface WeatherForecast {
  weather: [
    {
      icon: WeatherIconCode;
      main: string;
    },
  ];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}

const useWeatherForecast = (lat: number, lon: number) => {
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null);

  useEffect(() => {
    void (async () => {
      const params = {
        lat,
        lon,
        units: 'metric',
        appId: process.env.OPEN_WEATHER_API_KEY,
      };
      const forecast = await axios.get<WeatherForecast>(
        'https://api.openweathermap.org/data/2.5/weather',
        { params }
      );
      setWeatherForecast(forecast.data);
    })();
  }, [lat, lon]);

  return {
    weatherForecast,
  };
};

export default useWeatherForecast;
