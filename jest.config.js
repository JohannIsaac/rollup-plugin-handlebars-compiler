export default {
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: ['lib/**/!(*.d.ts|*index.ts)', 'dist/es/**'],
    testPathIgnorePatterns: [
      'dev-tests/.*',
    ]
};