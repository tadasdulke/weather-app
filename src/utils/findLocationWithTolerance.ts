import { type Location } from 'src/services/LocationSearchService';

const findLocationWithTolerance = (
  lat: number,
  lon: number,
  tolerance: number,
  locations: Location[]
) => {
  const location = locations.find(
    ({ coord }) =>
      Math.abs(coord.lat - lat) <= tolerance &&
      Math.abs(coord.lon - lon) <= tolerance
  );

  return location ?? null;
};

export default findLocationWithTolerance;
