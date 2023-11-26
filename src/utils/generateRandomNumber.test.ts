import generateRandomNumber from './generateRandomNumber';

describe('generateRandomNumber', () => {
  test('should generate value from to', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);

    const result = generateRandomNumber(1, 5);

    expect(result).toBe(3);
  });
});
