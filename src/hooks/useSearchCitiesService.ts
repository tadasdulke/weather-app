import CitySearchService, { type City } from 'src/services/CitySearchService';

import cities from '~data/cities.json';
import useSearchService from '~hooks/useSearchService';

const useSearchCitiesService = (searchValue: string, maxAmount: number) => {
  return useSearchService(
    new CitySearchService(maxAmount, cities as City[]),
    searchValue
  );
};

export default useSearchCitiesService;
