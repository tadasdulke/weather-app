import { useState, useEffect } from 'react';
import { getWeeksForecast, getCurrentWeather } from '~api/weatherApiClient';
import { type WeeksForecastList, type WeatherForecast } from '~api/types';

const useWeatherForecast = (lat: number, lon: number) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherForecast | null>(
    null
  );
  const [weeksForecast, setWeeksForecast] = useState<WeeksForecastList | null>(
    null
  );

  useEffect(() => {
    void (async () => {
      const [currentWeatherForecast, weeksForecastList] = await Promise.all([
        getCurrentWeather({
          lat,
          lon,
        }),
        getWeeksForecast({ cnt: 6, lat, lon }),
      ]);

      setWeeksForecast(weeksForecastList.data);
      setCurrentWeather(currentWeatherForecast.data);
    })();
  }, [lat, lon]);

  return {
    currentWeather,
    weeksForecast,
  };
};

export default useWeatherForecast;
