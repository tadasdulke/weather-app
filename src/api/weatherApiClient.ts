import axios, { type AxiosError } from 'axios';

import { Config, Endpoints } from './config';
import generateWeeksResponseData from './generateWeekForecastResponseData';
import { type WeatherForecast, type WeeksForecastList } from './types';

interface PositionParams {
  lat: number;
  lon: number;
}

interface WeekForecastParams extends PositionParams {
  cnt: number;
}

const instance = axios.create({
  baseURL: Config.BaseURL,
});

const commonParams = {
  units: 'metric',
  appId: process.env.OPEN_WEATHER_API_KEY,
};

/*
  Currently /forecast/daily endpoint works only with API keys which are from accounts with paid plans.
  This is a workaround to generate a portion of data which should come from /forecast/daily.
  If application is being tested with API key from paid account - this interceptor should be removed.
*/
instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.config.url === Endpoints.DailyForecast) {
      return await Promise.resolve({
        ...error.response,
        status: 200,
        data: generateWeeksResponseData(error.config?.params.cnt),
      });
    }

    return await Promise.reject(error);
  }
);

export const getCurrentWeather = async (params: PositionParams) => {
  const forecast = await instance.get<WeatherForecast>(
    Endpoints.CurrentWeather,
    {
      params: {
        ...commonParams,
        ...params,
      },
    }
  );

  return forecast;
};

export const getWeeksForecast = async (params: WeekForecastParams) => {
  const forecast = await instance.get<WeeksForecastList>(
    Endpoints.DailyForecast,
    {
      params: {
        ...commonParams,
        ...params,
      },
    }
  );
  return forecast;
};
