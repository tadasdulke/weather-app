import { useState, useEffect } from 'react';
import { type City } from 'src/services/CitySearchService';
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

const useWeatherForecast = (location: City) => {
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null);

  useEffect(() => {
    void (async () => {
      const params = {
        lat: location.coord.lat,
        lon: location.coord.lon,
        units: 'metric',
        appId: process.env.OPEN_WEATHER_API_KEY,
      };
      const forecast = await axios.get<WeatherForecast>(
        'https://api.openweathermap.org/data/2.5/weather',
        { params }
      );
      setWeatherForecast(forecast.data);
    })();
  }, [location]);

  return {
    weatherForecast,
  };
};

export default useWeatherForecast;
