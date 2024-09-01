/* Sample dev.test.ts */

/* You can put your own test Handlebars templates in the `../src/dev/` directory */

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options';
import { testTemplate } from './helpers';

describe('Handlebars Transformer', () => {

    it('should load simple handlebars templates', () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/simple.hbs',
            pluginOptions,
            true,
            async (err, output) => {
                expect(output).toHaveProperty('code')
            }
        )
    })

})