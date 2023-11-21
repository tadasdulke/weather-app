import { useState, useEffect } from 'react';
import SearchService, { Searchable } from 'src/services/SearchService';

const useSearchService = <T>(
  searchService: SearchService<T>,
  searchValue: string
) => {
  const [searchResult, setSearchResults] = useState<Searchable<T>[]>([]);

  useEffect(() => {
    const results = searchService.search(searchValue);
    setSearchResults(results);
  }, [searchValue]);

  return searchResult;
};

export default useSearchService;
