import { useState } from 'react';
import Router from '~components/Router';
import LocationContext from '~context/LocationContext';
import { City } from './services/CitySearchService';

const defaultLocation = {
  id: 593116,
  name: 'Vilnius',
  // country: 'LT',
  // coord: {
  //   lon: 25.2798,
  //   lat: 54.689159,
  // },
};

const App = () => {
  const [location, setLocation] = useState<City>(defaultLocation);
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <Router />
    </LocationContext.Provider>
  );
};
export default App;
