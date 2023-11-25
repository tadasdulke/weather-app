import { type WeatherIconCode } from '~components/WeatherIcon';

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

interface WeeksForecast {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      icon: WeatherIconCode;
    },
  ];
}

export interface WeeksForecastList {
  list: WeeksForecast[];
}
