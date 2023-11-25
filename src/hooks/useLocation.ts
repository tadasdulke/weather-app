import { useEffect, useState } from 'react';
import { type Location } from 'src/services/LocationSearchService';

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
  const [location, setLocation] = useState<Location>(defaultLocation);
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
