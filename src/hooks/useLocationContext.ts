import { useContext } from 'react';
import { Errors } from 'src/types/enums';

import LocationContext from '~context/LocationContext';

import useGlobalError from './useGlobalError';

const useLocationContext = () => {
  const setError = useGlobalError();
  const locationContextValue = useContext(LocationContext);

  if (locationContextValue === null) {
    setError(Errors.NoLocationProvider);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return locationContextValue!;
};

export default useLocationContext;
