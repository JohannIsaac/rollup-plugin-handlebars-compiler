export default {
    transform: {
      '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.test?\\.ts$',
    moduleFileExtensions: ['ts', 'js']
};