import { renderHook, waitFor } from '@testing-library/react';

import { getCurrentWeather, getWeeksForecast } from '~api/weatherApiClient';

import useWeatherForecast from './useWeatherForecast';

jest.mock('~api/weatherApiClient');

describe('useWeatherForecast', () => {
  test('should set fetched values', async () => {
    const getCurrentWeatherResult = { data: 'getCurrentWeatherResult' };
    const getWeeksForecastResult = { data: 'getWeeksForecastResult' };

    (getCurrentWeather as jest.Mock).mockReturnValue(
      Promise.resolve(getCurrentWeatherResult)
    );
    (getWeeksForecast as jest.Mock).mockReturnValue(
      Promise.resolve(getWeeksForecastResult)
    );

    const lat = 1;
    const lon = 10;

    const { result } = renderHook(() => useWeatherForecast(lat, lon));

    await waitFor(() => {
      expect(getCurrentWeather).toHaveBeenCalledTimes(1);
      expect(getCurrentWeather).toHaveBeenCalledWith({ lat, lon });
      expect(getWeeksForecast).toHaveBeenCalledTimes(1);
      expect(getWeeksForecast).toHaveBeenCalledWith({ lat, lon, cnt: 6 });

      expect(result.current.isLoading).toBe(false);
      expect(result.current.currentWeather).toBe(getCurrentWeatherResult.data);
      expect(result.current.weeksForecast).toBe(getWeeksForecastResult.data);
    });
  });
});
