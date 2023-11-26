import regexMatch from './regexMatch';

describe('regexMatch', () => {
  test('should match with regex pattern', () => {
    const valueToMatch = 'tes';
    const result = regexMatch(valueToMatch, 'thisisatest');

    expect(result?.[0]).toBe(valueToMatch);
  });
});
