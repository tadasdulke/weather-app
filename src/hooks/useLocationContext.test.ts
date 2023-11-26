import { renderHook } from '@testing-library/react';
import { useContext } from 'react';

import useLocationContext from './useLocationContext';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('useLocationContext', () => {
  test('should throw error if context is not set', () => {
    (useContext as jest.Mock).mockReturnValue(null);

    expect(() => renderHook(useLocationContext)).toThrow();
  });

  test('should return context value', () => {
    const expected = 'expected';
    (useContext as jest.Mock).mockReturnValue(expected);

    const { result } = renderHook(useLocationContext);

    expect(result.current).toBe(expected);
  });
});
