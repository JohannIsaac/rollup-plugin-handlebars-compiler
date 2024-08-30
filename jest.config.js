export default {
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '/tests/(rollup|compiler|runtime)/.*\\.test?\\.(ts|js)$',
    moduleFileExtensions: ['ts', 'js']
};