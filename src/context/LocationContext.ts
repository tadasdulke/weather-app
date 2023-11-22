import { createContext } from 'react';
import { type City } from 'src/services/CitySearchService';

interface LocationContextValue {
  location: City;
  setLocation: (city: City) => void;
}

const LocationContext = createContext<LocationContextValue | null>(null);

export default LocationContext;
