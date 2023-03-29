/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  collectCoverageFrom: [
    './**/*.ts'
  ],
};