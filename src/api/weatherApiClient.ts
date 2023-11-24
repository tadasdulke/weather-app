import axios from 'axios';

import { Config, Endpoints } from './config';
import { type WeatherIconCode } from '~utils/findWeatherIcon';

interface WeatherForecastParams {
  lat: number;
  lon: number;
}

export interface WeatherForecast {
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

const instance = axios.create({
  baseURL: Config.BaseURL,
});

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response.config.url === Endpoints.DailyForecast) {
      return await Promise.resolve({
        ...error.response,
        status: 200,
        data: { test: 'test' },
      });
    }

    return await Promise.reject(error);
  }
);

export const getCurrentWeather = async (params: WeatherForecastParams) => {
  const forecast = await instance.get<WeatherForecast>(
    Endpoints.CurrentWeather,
    {
      params: {
        ...params,
        units: 'metric',
        appId: process.env.OPEN_WEATHER_API_KEY,
      },
    }
  );

  return forecast;
};

export const getWeeksForecast = async () => {
  const forecast = await instance.get(Endpoints.DailyForecast);

  return forecast;
};
