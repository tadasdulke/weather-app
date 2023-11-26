import findLocationWithTolerance from './findLocationWithTolerance';

const locations = [
  {
    id: 1,
    name: 'Vilnius',
    coord: {
      lon: 10,
      lat: 10,
    },
  },
  {
    id: 2,
    name: 'Alytus',
    coord: {
      lon: 11.5,
      lat: 11.5,
    },
  },
];

describe('findLocationWithTolerance', () => {
  test('should find location with coordinate difference tolerance', () => {
    const location = locations[1];

    const tolerance = 0.5;

    const result = findLocationWithTolerance(
      location.coord.lon - tolerance,
      location.coord.lat - tolerance,
      tolerance,
      locations
    );

    expect(result).toBe(location);
  });

  test('should return null if no location found', () => {
    const result = findLocationWithTolerance(4, 10, 0.1, locations);

    expect(result).toBeNull();
  });
});
