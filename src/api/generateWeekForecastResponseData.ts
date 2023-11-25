import { WeatherIconCodeEnum } from '~components/WeatherIcon';
import generateRandomNumber from '~utils/generateRandomNumber';

import { type WeeksForecastList } from './types';

const generateWeekForecastResponseData = (
  amountOfDays: number
): WeeksForecastList => {
  const weatherIconCodes = Object.values(WeatherIconCodeEnum);

  return {
    list: [...new Array(amountOfDays).keys()].map((day) => {
      const date = new Date();
      date.setDate(date.getDate() + (day + 1));
      const weatherIconCode =
        weatherIconCodes[generateRandomNumber(0, weatherIconCodes.length)];

      return {
        dt: date.getTime(),
        temp: {
          min: generateRandomNumber(1, 5),
          max: generateRandomNumber(5, 10),
        },
        weather: [
          {
            icon: weatherIconCode,
          },
        ],
      };
    }),
  };
};
export default generateWeekForecastResponseData;
