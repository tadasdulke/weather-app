import { renderHook } from '@testing-library/react';
import { useState } from 'react';

import { defaultLocation } from '~config';
import findLocation from '~utils/findLocation';

import useLocation from './useLocation';

jest.mock('~utils/findLocation');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const renderUseLocationHook = () => {
  const setLocationMock = jest.fn();

  (useState as jest.Mock).mockReturnValue([defaultLocation, setLocationMock]);

  const findLocationResult = 'found location';
  const findLocationMock = jest.fn().mockReturnValue(findLocationResult);
  (findLocation as jest.Mock).mockImplementation(findLocationMock);

  renderHook(useLocation);

  return {
    setLocationMock,
    findLocationResult,
    findLocationMock,
  };
};

describe('useLocation', () => {
  test('should set found location', () => {
    const latitude = 10;
    const longitude = 4;

    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementation((onSuccess, _) =>
          onSuccess({ coords: { latitude, longitude } })
        ),
    };

    // @ts-expect-error: suppress read-only variable change error
    navigator.geolocation = mockGeolocation;

    const { findLocationMock, setLocationMock, findLocationResult } =
      renderUseLocationHook();

    expect(findLocationMock).toHaveBeenCalledTimes(1);
    expect(findLocationMock).toHaveBeenCalledWith(latitude, longitude);
    expect(setLocationMock).toHaveBeenCalledWith(findLocationResult);
  });

  test('should set default location on geolocation error', () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((_, onErr) => onErr()),
    };

    // @ts-expect-error: suppress read-only variable change error
    navigator.geolocation = mockGeolocation;

    const { setLocationMock } = renderUseLocationHook();

    expect(setLocationMock).toHaveBeenCalledWith(defaultLocation);
    expect(setLocationMock).toHaveBeenCalledTimes(1);
  });
});
