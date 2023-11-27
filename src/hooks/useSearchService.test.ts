import { renderHook } from '@testing-library/react';

import SearchService from '~services/SearchService';

import useSearchService from './useSearchService';

describe('useSearchService', () => {
  test('should trigger search action when sarch value changes', () => {
    const searchResult = 4;
    const searchMock = jest.fn().mockReturnValue(searchResult);

    class MockedSearchService extends SearchService<number> {
      override search = searchMock;
    }

    const searchValue = '1';
    const setErrorMock = jest.fn();

    const mockedSearchService = new MockedSearchService(
      3,
      [1, 2, 3, 4, 5, 6],
      setErrorMock
    );

    const { result } = renderHook(() =>
      useSearchService<number>(mockedSearchService, searchValue)
    );

    expect(searchMock).toHaveBeenCalledWith(searchValue);
    expect(searchMock).toHaveBeenCalledTimes(1);
    expect(result.current).toBe(searchResult);
  });
});
