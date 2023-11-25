import { useEffect,useState } from 'react';

import { type WeatherForecast,type WeeksForecastList } from '~api/types';
import { getCurrentWeather,getWeeksForecast } from '~api/weatherApiClient';

const useWeatherForecast = (lat: number, lon: number) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherForecast | null>(
    null
  );
  const [weeksForecast, setWeeksForecast] = useState<WeeksForecastList | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);
      const [currentWeatherForecast, weeksForecastList] = await Promise.all([
        getCurrentWeather({
          lat,
          lon,
        }),
        getWeeksForecast({ cnt: 6, lat, lon }),
      ]);
      setIsLoading(false);
      setWeeksForecast(weeksForecastList.data);
      setCurrentWeather(currentWeatherForecast.data);
    })();
  }, [lat, lon]);

  return {
    currentWeather,
    weeksForecast,
    isLoading,
  };
};

export default useWeatherForecast;
