import CitySearchService, { type City } from 'src/services/CitySearchService';
import useSearchService from '~hooks/useSearchService';
import cities from '~data/cities.json';

const useSearchCitiesService = (searchValue: string, maxAmount: number) => {
  return useSearchService(
    new CitySearchService(maxAmount, cities as City[]),
    searchValue
  );
};

export default useSearchCitiesService;
