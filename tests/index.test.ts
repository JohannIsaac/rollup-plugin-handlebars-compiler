import type { Plugin } from 'rollup';
import handlebarsCompilerPlugin from '../lib';

describe('Test command', () => {
    it('this is the first test', () => {
        let result: Plugin = handlebarsCompilerPlugin()
        expect(result.name).toBeTruthy()
    })
})