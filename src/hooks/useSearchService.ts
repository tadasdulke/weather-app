import { useState, useEffect } from 'react';
import { type Searchable } from 'src/services/SearchService';
import type SearchService from 'src/services/SearchService';

const useSearchService = <T>(
  searchService: SearchService<T>,
  searchValue: string
) => {
  const [searchResult, setSearchResults] = useState<Array<Searchable<T>>>([]);

  useEffect(() => {
    const results = searchService.search(searchValue);
    setSearchResults(results);
  }, [searchValue]);

  return searchResult;
};

export default useSearchService;
