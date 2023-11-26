import getNameOfTheDay from './getNameOfTheDay';

describe('getNameOfTheDay', () => {
  test('should return name of the day', () => {
    const result = getNameOfTheDay(new Date(1698850516 * 1000));

    expect(result).toBe('Wed');
  });
});
