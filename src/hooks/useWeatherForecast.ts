import { useEffect, useState } from 'react';
import { Errors } from 'src/types/enums';

import { type WeatherForecast, type WeeksForecastList } from '~api/types';
import { getCurrentWeather, getWeeksForecast } from '~api/weatherApiClient';
import useGlobalError from '~hooks/useGlobalError';

const useWeatherForecast = (lat: number, lon: number) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherForecast | null>(
    null
  );
  const [weeksForecast, setWeeksForecast] = useState<WeeksForecastList | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const setError = useGlobalError();

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      try {
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
      } catch (err) {
        setError(Errors.SomethingWentWrong);
      }
    })();
  }, [lat, lon]);

  return {
    currentWeather,
    weeksForecast,
    isLoading,
  };
};

export default useWeatherForecast;
