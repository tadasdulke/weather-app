/* eslint-disable import/first */
const locations = [
  {
    id: 1,
    name: 'Vilnius',
    coord: {
      lon: 54,
      lat: 34,
    },
  },
  {
    id: 2,
    name: 'Alytus',
    coord: {
      lon: 51,
      lat: 10,
    },
  },
];

jest.mock('~data/cities.json', () => locations);

import { locationSearchCoordinateDifferenceTolerance } from '~config';

import findLocation from './findLocation';
import findLocationWithTolerance from './findLocationWithTolerance';

jest.mock('./findLocationWithTolerance');

describe('findLocation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should look for location with different tolerances until found', () => {
    const foundLocation = locations[0];

    (findLocationWithTolerance as jest.Mock).mockReturnValueOnce(null);
    (findLocationWithTolerance as jest.Mock).mockReturnValueOnce(null);
    (findLocationWithTolerance as jest.Mock).mockReturnValueOnce(foundLocation);

    const lat = 10;
    const lon = 2;

    findLocation(lat, lon);

    expect(findLocationWithTolerance).toHaveBeenNthCalledWith(
      1,
      lat,
      lon,
      locationSearchCoordinateDifferenceTolerance[0],
      locations
    );

    expect(findLocationWithTolerance).toHaveBeenNthCalledWith(
      2,
      lat,
      lon,
      locationSearchCoordinateDifferenceTolerance[1],
      locations
    );

    expect(findLocationWithTolerance).toHaveBeenNthCalledWith(
      3,
      lat,
      lon,
      locationSearchCoordinateDifferenceTolerance[2],
      locations
    );
    expect(findLocationWithTolerance).toHaveBeenCalledTimes(3);
  });

  test('should return null if no location was found', () => {
    (findLocationWithTolerance as jest.Mock).mockReturnValue(null);

    const lat = 10;
    const lon = 2;

    findLocation(lat, lon);
    expect(findLocationWithTolerance).toHaveBeenCalledTimes(
      locationSearchCoordinateDifferenceTolerance.length
    );
  });
});
