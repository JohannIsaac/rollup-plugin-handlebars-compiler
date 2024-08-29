/* Sample dev.test.ts */

/* You can put your own test Handlebars templates in the `/tests/plugin/dev/` directory */

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options';
import { removeOutputDir, testTemplate } from './utils';

removeOutputDir()

describe('Handlebars Transformer', () => {

    it('should load simple handlebars templates', () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './simple.hbs',
            pluginOptions,
            async (err, output) => {
                expect(output).toHaveProperty('code')
            }
        )
    })

    /* ------ Write your own Jest tests -----

    it('should load simple handlebars templates', () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './dev/template.hbs',
            pluginOptions,
            async (err, output) => {
                expect(output).toHaveProperty('code')
            }
        )
    })

    --------------------------------------- */

})