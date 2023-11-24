import { useState, useEffect } from 'react';
import { getCurrentWeather, type WeatherForecast } from '~api/weatherApiClient';

const useWeatherForecast = (lat: number, lon: number) => {
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null);

  useEffect(() => {
    void (async () => {
      const forecast = await getCurrentWeather({
        lat,
        lon,
      });
      setWeatherForecast(forecast.data);
    })();
  }, [lat, lon]);

  return {
    weatherForecast,
  };
};

export default useWeatherForecast;
