import cities from '~data/cities.json';
import { type City } from 'src/services/CitySearchService';

const findLocationWithTolerance = (
  lat: number,
  lon: number,
  tolerance: number
) => {
  const location = (cities as City[]).find(
    ({ coord }) =>
      Math.abs(coord.lat - lat) <= tolerance &&
      Math.abs(coord.lon - lon) <= tolerance
  );

  return location ?? null;
};

const findLocation = (lat: number, lon: number) => {
  const matchTolerances = [0.5, 1, 2, 5];

  let foundLocation = null;

  for (let i = 0; i < matchTolerances.length; i++) {
    const matchTolerance = matchTolerances[i];
    const location = findLocationWithTolerance(lat, lon, matchTolerance);
    if (location !== null) {
      foundLocation = location;
      break;
    }
  }
  return foundLocation;
};

export default findLocation;
