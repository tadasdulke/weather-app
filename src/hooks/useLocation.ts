import { useState, useEffect } from 'react';
import { type City } from '~services/CitySearchService';
import findLocation from '~utils/findLocation';

const defaultLocation = {
  id: 593116,
  name: 'Vilnius',
  coord: {
    lon: 25,
    lat: 54,
  },
};

const useLocation = () => {
  const [location, setLocation] = useState<City>(defaultLocation);

  useEffect(() => {
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log(latitude, longitude);
        const location = findLocation(latitude, longitude);

        if (location !== null) {
          setLocation(location);
        }
      },
      () => {
        setLocation(defaultLocation);
      }
    );
  }, [navigator.geolocation]);

  return {
    location,
    setLocation,
  };
};

export default useLocation;
