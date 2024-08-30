import fs from 'fs';
import path from 'path';

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options';
import { lookupHelperRegistration, lookupPartialRegistration } from './utils/utils';
import { testTemplate } from './helpers';

describe('Handlebars Compiler', () => {

    it('should load simple handlebars templates', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/simple.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                expect(output).toHaveProperty('code')
            }
        )
    })
    
    it('properly catches errors in template syntax', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/invalid-syntax-error.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchError = err?.message.includes("Parse error")
                expect(catchError).toBe(true)
            }
        )
    })

    it('properly catches errors when unknown helper found', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            knownHelpersOnly: true
        }

        testTemplate(
            '../src/invalid-unknown-helpers.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchError = err?.message.includes("You specified knownHelpersOnly")
                expect(catchError).toBe(true)
            }
        )
    })

    it('allows specifying known helpers', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            helpers: {
                someKnownHelper: () => 'some known helper'
            },
            knownHelpers: {
                someKnownHelper: true
            },
            knownHelpersOnly: true
        }

        testTemplate(
            '../src/with-known-helpers.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchResult = lookupHelperRegistration('someKnownHelper', output?.code)
                expect(catchResult).toBe(true)
            }
        )
    })

    it.todo('should find helpers and partials if both relativeRoot and helperDirs is set')
    // with-inline-requires.hbs

    it('should be able to use commonJS helpers', async () => {
        let module = await import('../src/helpers-commonjs/descriptionHelper.js')
        let descriptionHelper = module.default

        const pluginOptions: HandlebarsPluginOptions = {
            helpers: {
                descriptionHelper
            }
        }

        testTemplate(
            '../src/with-helpers-commonjs.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupHelperRegistration('descriptionHelper', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should be able to use block helpers', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            helpers: {
                list: function(items: Array<object>, options) {
                    const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
                    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
                }
            }
        }

        testTemplate(
            '../src/with-block-helpers.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupHelperRegistration('list', output.code)
                expect(catchOutput).toBe(true)
            }
        )

    })

    it('should allow partials to be passed through the plugin options', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            partials: {
                otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
            }
        }

        testTemplate(
            '../src/with-plugin-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('otherPartial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials to be passed through the plugin options', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            partials: {
                otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
            }
        }

        testTemplate(
            '../src/with-plugin-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('otherPartial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials to find multiple paths', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/with-dir-partials.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput1 = lookupPartialRegistration('partialDirs/otherPartial', output?.code)
                const catchOutput2 = lookupPartialRegistration('partialDirs/anotherDir/otherPartial', output?.code)
                expect(catchOutput1 && catchOutput2).toBe(true)
            }
        )
    })

    it.todo('should allow nested partials')
    it.todo('should allow resolving parent paths in partials')

    it('should allow partials from ancestor directory', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/nested-templates/nested/with-ancestor-dir-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../../some-partial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials from parent directory', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/nested-templates/with-parent-dir-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../some-partial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials from cousin directory', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/nested-templates/with-cousin-dir-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should use failover content of the partial block if it refers to non-existent partial', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/with-partial-block.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = output?.code.includes("<div>Failover</div>")
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should recognize and render inline partials', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            '../src/with-inline-partial.hbs',
            pluginOptions,
            false,
            async (err, output) => {
                const catchOutput = output?.code.includes("printFoo")
                expect(catchOutput).toBe(true)
            }
        )
    })
})