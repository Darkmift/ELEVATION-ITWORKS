/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export default config;
