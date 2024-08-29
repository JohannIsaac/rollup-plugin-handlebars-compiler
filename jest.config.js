export default {
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '/tests/(plugin|runtime)/.*\\.test?\\.(ts|js)$',
    moduleFileExtensions: ['ts', 'js']
};