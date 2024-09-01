export default {
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testRegex: '/dev-tests/.*\\.test?\\.(ts|js)$',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: ['lib/**/!(*.d.ts|*index.ts)', 'dist/es/**']
};