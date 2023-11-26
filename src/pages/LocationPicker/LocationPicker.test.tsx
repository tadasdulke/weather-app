import { fireEvent, render, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { Routes } from '~components/Router';
import useLocationContext from '~hooks/useLocationContext';
import useSearchLocationService from '~hooks/useSearchLocationService';

import LocationPicker from '.';

jest.mock('~hooks/useLocationContext');
jest.mock('~hooks/useSearchLocationService');
jest.mock('react-router-dom');

const renderLocationPicker = () => {
  const locations = ['Vilnius', 'Kaunas', 'Alytus'].map((name) => ({
    id: 1,
    name,
    coord: {
      lon: 10,
      lat: 12,
    },
    match: /(?:)/.exec(''),
  }));

  const setLocationMock = jest.fn();

  (useLocationContext as jest.Mock).mockReturnValue({
    setLocation: setLocationMock,
  });

  const navigateMock = jest.fn();

  (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  (useSearchLocationService as jest.Mock).mockReturnValue(locations);

  render(<LocationPicker />);

  return {
    setLocationMock,
    locations,
    navigateMock,
  };
};

describe('LocationPicker', () => {
  test('should render locations', () => {
    const { locations } = renderLocationPicker();

    locations.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('should set location and navigate to another page', () => {
    const { locations, setLocationMock, navigateMock } = renderLocationPicker();
    const locationToSelect = locations[0];

    const locationButton = screen.getByText(locationToSelect.name);

    fireEvent.click(locationButton);

    expect(setLocationMock).toHaveBeenCalledWith(locationToSelect);
    expect(setLocationMock).toHaveBeenCalledTimes(1);

    expect(navigateMock).toHaveBeenCalledWith(Routes.Homepage);
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
