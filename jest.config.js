export default {
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '/(tests|runtime-tests)/.*\\.test?\\.(ts|js)$',
    moduleFileExtensions: ['ts', 'js']
};