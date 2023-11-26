import { render, screen } from '@testing-library/react';

import { type WeatherForecast, type WeeksForecastList } from '~api/types';
import Spinner from '~common/Spinner';
import useLocationContext from '~hooks/useLocationContext';
import useWeatherForecast from '~hooks/useWeatherForecast';

import Homepage from '.';

jest.mock('~common/Spinner');
jest.mock('~hooks/useLocationContext');
jest.mock('~hooks/useWeatherForecast');

const renderHomepage = (
  currentWeather?: WeatherForecast,
  weeksForecast?: WeeksForecastList,
  isLoading?: boolean
) => {
  const spinnerText = 'spinner';
  (Spinner as jest.Mock).mockReturnValue(spinnerText);

  const location = {
    id: 1,
    name: 'New York',
    coord: {
      lon: 12,
      lat: 1,
    },
  };

  (useLocationContext as jest.Mock).mockReturnValue({ location });

  (useWeatherForecast as jest.Mock).mockReturnValue({
    currentWeather: currentWeather ?? null,
    weeksForecast: weeksForecast ?? null,
    isLoading: isLoading ?? null,
  });

  render(<Homepage />);

  return {
    spinnerText,
    location,
  };
};

describe('Homepage', () => {
  test('should show spinner', () => {
    const { spinnerText } = renderHomepage();

    expect(screen.getByText(spinnerText)).toBeInTheDocument();
  });

  test('should display forecast', () => {
    const weatherForecast: WeatherForecast = {
      weather: [
        {
          icon: '01n',
          main: 'Cloudy',
        },
      ],
      main: {
        temp: 10,
        temp_max: 15,
        temp_min: 4,
      },
    };

    const weeksForecastList: WeeksForecastList = {
      list: [
        {
          dt: 1701027091 * 1000,
          temp: {
            min: 1,
            max: 5,
          },
          weather: [
            {
              icon: '01n',
            },
          ],
        },
      ],
    };

    renderHomepage(weatherForecast, weeksForecastList, false);

    expect(screen.getByText(weatherForecast.main.temp_max)).toBeInTheDocument();
    expect(screen.getByText(weatherForecast.main.temp_min)).toBeInTheDocument();
    expect(
      screen.getByText(weatherForecast.weather[0].main)
    ).toBeInTheDocument();
    expect(screen.getByText('SUN')).toBeInTheDocument();
    expect(
      screen.getByText(weeksForecastList.list[0].temp.max)
    ).toBeInTheDocument();
    expect(
      screen.getByText(weeksForecastList.list[0].temp.min)
    ).toBeInTheDocument();
  });
});
