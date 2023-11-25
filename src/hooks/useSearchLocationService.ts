import LocationSearchService, {
  type Location,
} from 'src/services/LocationSearchService';

import cities from '~data/cities.json';
import useSearchService from '~hooks/useSearchService';

const useSearchLocationService = (searchValue: string, maxAmount: number) =>
  useSearchService(
    new LocationSearchService(maxAmount, cities as Location[]),
    searchValue
  );

export default useSearchLocationService;
