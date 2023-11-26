import { locationSearchCoordinateDifferenceTolerance } from '~config';
import cities from '~data/cities.json';

import findLocationWithTolerance from './findLocationWithTolerance';

const findLocation = (lat: number, lon: number) => {
  let foundLocation = null;

  for (let i = 0; i < locationSearchCoordinateDifferenceTolerance.length; i++) {
    const matchTolerance = locationSearchCoordinateDifferenceTolerance[i];
    const location = findLocationWithTolerance(
      lat,
      lon,
      matchTolerance,
      cities
    );
    if (location !== null) {
      foundLocation = location;
      break;
    }
  }
  return foundLocation;
};

export default findLocation;
