import fs from 'fs';
import path from 'path';

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options';
import { lookupHelperRegistration, lookupPartialRegistration } from './utils/utils';
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
    
    it('properly catches errors in template syntax', () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './invalid-syntax-error.hbs',
            pluginOptions,
            async (err, output) => {
                const catchError = err?.message.includes("Parse error")
                expect(catchError).toBe(true)
            }
        )
    })

    it('properly catches errors when unknown helper found', () => {

        const pluginOptions: HandlebarsPluginOptions = {
            knownHelpersOnly: true
        }

        testTemplate(
            './invalid-unknown-helpers.hbs',
            pluginOptions,
            async (err, output) => {
                const catchError = err?.message.includes("You specified knownHelpersOnly")
                expect(catchError).toBe(true)
            }
        )
    })

    it('allows specifying known helpers', () => {

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
            './with-known-helpers.hbs',
            pluginOptions,
            async (err, output) => {
                const catchResult = output?.code.indexOf('some known helper') >= 0
                expect(catchResult).toBe(true)
            }
        )
    })

    it.todo('should find helpers and partials if both relativeRoot and helperDirs is set')
    // with-inline-requires.hbs

    it('should be able to use commonJS helpers', async () => {
        let module = await import('./helpers-commonjs/descriptionHelper.js')
        let descriptionHelper = module.default

        const pluginOptions: HandlebarsPluginOptions = {
            helpers: {
                descriptionHelper
            }
        }

        testTemplate(
            './with-helpers-commonjs.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = lookupHelperRegistration('descriptionHelper', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials to be passed through the plugin options', async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            partials: {
                otherPartial: fs.readFileSync(path.join(__dirname, './partialDirs/anotherDir/otherPartial.hbs')).toString()
            }
        }

        testTemplate(
            './with-plugin-partial.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('otherPartial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials to find multiple paths', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './with-dir-partials.hbs',
            pluginOptions,
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
            './nested-templates/nested/with-ancestor-dir-partial.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../../some-partial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials from parent directory', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './nested-templates/with-parent-dir-partial.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../some-partial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should allow partials from cousin directory', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './nested-templates/with-cousin-dir-partial.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output?.code)
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should use failover content of the partial block if it refers to non-existent partial', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './with-partial-block.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = output?.code.indexOf("<div>Failover</div>") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })

    it('should recognize and render inline partials', async () => {

        const pluginOptions: HandlebarsPluginOptions = {}

        testTemplate(
            './with-inline-partial.hbs',
            pluginOptions,
            async (err, output) => {
                const catchOutput = output?.code.indexOf("printFoo") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
})