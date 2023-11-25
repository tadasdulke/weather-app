module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};
