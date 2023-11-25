import { useContext } from 'react';
import { Errors } from 'src/types/enums';

import LocationContext from '~context/LocationContext';

const useLocationContext = () => {
  const locationContextValue = useContext(LocationContext);

  if (locationContextValue === null) {
    throw new Error(Errors.NoLocationProvider);
  }

  return locationContextValue;
};

export default useLocationContext;
