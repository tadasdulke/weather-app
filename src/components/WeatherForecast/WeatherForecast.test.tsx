import { render, screen } from '@testing-library/react';

import { type WeeksForecastList } from '~api/types';

import WeatherForecast from '.';

describe('WeatherForecast', () => {
  test('should render passed forecast', () => {
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

    render(<WeatherForecast weeksForecast={weeksForecastList} />);

    expect(screen.getByText('SUN')).toBeInTheDocument();
    expect(
      screen.getByText(weeksForecastList.list[0].temp.max)
    ).toBeInTheDocument();
    expect(
      screen.getByText(weeksForecastList.list[0].temp.min)
    ).toBeInTheDocument();
  });
});
