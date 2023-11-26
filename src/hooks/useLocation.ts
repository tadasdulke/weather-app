import { useEffect, useState } from 'react';

import { defaultLocation } from '~config';
import { type Location } from '~services/LocationSearchService';
import findLocation from '~utils/findLocation';

const useLocation = () => {
  const [location, setLocation] = useState<Location>(defaultLocation);

  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(
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
