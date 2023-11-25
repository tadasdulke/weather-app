import { createContext } from 'react';
import { type Location } from 'src/services/LocationSearchService';

interface LocationContextValue {
  location: Location;
  setLocation: (location: Location) => void;
}

const LocationContext = createContext<LocationContextValue | null>(null);

export default LocationContext;
