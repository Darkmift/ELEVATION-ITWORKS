/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

/** @type {import('jest').Config} */
const config = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'node',
  transform: {
    '.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/*.(test|unit-test|int-test|e2e-test).(js|jsx|ts|tsx)'],
  globalSetup: './jest.global-setup.js',
  globalTeardown: './jest.global-teardown.js',
  setupFilesAfterEnv: ['./jest.setup.js'],
  verbose: true,
};

export default config;
