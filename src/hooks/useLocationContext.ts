import { useContext } from 'react';
import LocationContext from '~context/LocationContext';
import { Errors } from 'src/types/enums';

const useLocationContext = () => {
  const { setLocation, location } = useContext(LocationContext) || {};
  if (!setLocation || !location) {
    throw new Error(Errors.NoLocationProvider);
  }

  return { location, setLocation };
};

export default useLocationContext;
