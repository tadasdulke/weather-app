const tsconfigPathsJest = require('tsconfig-paths-jest');
const tsconfig = require('./tsconfig.json');

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss)$': '<rootDir>/__mocks__/styleMock.js',
    ...tsconfigPathsJest(tsconfig),
  },
};
