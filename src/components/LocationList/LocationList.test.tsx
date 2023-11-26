import { fireEvent, render, screen } from '@testing-library/react';

import LocationList from '.';

const createLocations = (names: string[]) => {
  return names.map((name, index) => ({
    id: index,
    name,
    coord: {
      lon: 10,
      lat: 1,
    },
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    match: /(?:)/.exec('')!,
  }));
};

const renderLocationList = () => {
  const onLocationSelectMock = jest.fn();

  const names = ['Kaunas', 'Vilnius'];
  const locations = createLocations(names);

  render(
    <LocationList
      locations={locations}
      onLocationSelect={onLocationSelectMock}
    />
  );

  return {
    names,
    onLocationSelectMock,
  };
};

describe('LocationList', () => {
  test('should display all locations', async () => {
    const { names } = renderLocationList();

    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('should call callback on location click', async () => {
    const { onLocationSelectMock, names } = renderLocationList();

    const name = names[0];

    const locationButton = screen.getByText(name);
    fireEvent.click(locationButton);

    expect(onLocationSelectMock).toHaveBeenCalledTimes(1);
  });
});
