import LocationSearchService, {
  type Location,
} from 'src/services/LocationSearchService';

import cities from '~data/cities.json';
import useGlobalError from '~hooks/useGlobalError';
import useSearchService from '~hooks/useSearchService';

const useSearchLocationService = (searchValue: string, maxAmount: number) => {
  const setError = useGlobalError();

  return useSearchService(
    new LocationSearchService(maxAmount, cities as Location[], setError),
    searchValue
  );
};

export default useSearchLocationService;
