import { useContext } from 'react';
import LocationContext from '~context/LocationContext';
import { Errors } from 'src/types/enums';

const useLocationContext = () => {
  const locationContextValue = useContext(LocationContext);

  if (locationContextValue === null) {
    throw new Error(Errors.NoLocationProvider);
  }

  return locationContextValue;
};

export default useLocationContext;
