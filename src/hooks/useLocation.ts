import { useEffect, useState } from 'react';
import { type City } from 'src/services/CitySearchService';

import findLocation from '~utils/findLocation';

const defaultLocation = {
  id: 593116,
  name: 'Vilnius',
  coord: {
    lon: 25.2798,
    lat: 54.689159,
  },
};

const useLocation = () => {
  const [location, setLocation] = useState<City>(defaultLocation);
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('error'); // handle this;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const location = findLocation(latitude, longitude);

        if (location !== null) {
          setLocation(location);
        }
      },
      () => {
        setLocation(defaultLocation);
      }
    );
  }, []);

  return {
    location,
    setLocation,
  };
};

export default useLocation;
