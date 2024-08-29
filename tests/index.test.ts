import fs from 'fs';
import path from 'path';
import { js_beautify } from 'js-beautify';

import HandlebarsTransformer from '../lib/handlebars-transformer';

import { HandlebarsPluginOptions } from '../lib/types/plugin-options';
import { CompileResult } from '../lib/types/handlebars';

type TestFn = (err: Error, output: CompileResult) => {}

const testFunctionsDir = '../runtime-tests/functions'
const absoluteTestFunctionsDir = path.resolve(__dirname, testFunctionsDir)
if (fs.existsSync(absoluteTestFunctionsDir)) {
    fs.rmdirSync(absoluteTestFunctionsDir, { recursive: true });
}

function loadTemplate(templatePath: string) {
    return fs.readFileSync(templatePath).toString();
}

function createFunctionFile(template: string, output: CompileResult) {
    const templatePath = path.join(__dirname, template)
    const extname = path.extname(template)
    const outputTemplate = path.join(__dirname, testFunctionsDir, template)
    const outputDir = path.dirname(outputTemplate)
    const outputName = `${path.basename(templatePath, extname)}.js`
    const outputPath = path.join(outputDir, outputName)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    let code: string = output?.code || ''
    code = !code ? code : js_beautify(code)
    fs.writeFileSync(outputPath, code)
}

function testTemplate(template: string, pluginOptions: HandlebarsPluginOptions, testFn: TestFn) {

    let err: Error | undefined
    const hbsTransformer = new HandlebarsTransformer(pluginOptions)

    const templatePath = path.join(__dirname, template)
    
    let source: string | null = null
    try {
        source = loadTemplate(templatePath)
    } catch (e) {
        err = e
        return
    }

    let output: CompileResult | null = null
    try {
        output = hbsTransformer.transform(source, templatePath)
    } catch (e) {
        err = e
    }

    testFn(err, output)

    createFunctionFile(template, output)

}

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
                const catchError = err.message.indexOf("Parse error") >= 0
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
                const catchError = err.message.indexOf("You specified knownHelpersOnly") >= 0
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
                const catchOutput = output.code.indexOf("Handlebars.registerHelper('description") >= 0
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
                const catchOutput = output?.code.indexOf("Handlebars.registerPartial('otherPartial") >= 0
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
                const catchOutput1 = output?.code.indexOf("Handlebars.registerPartial('partialDirs/otherPartial") >= 0
                const catchOutput2 = output?.code.indexOf("Handlebars.registerPartial('partialDirs/anotherDir/otherPartial") >= 0
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
                const catchOutput = output?.code.indexOf("Handlebars.registerPartial('../../some-partial") >= 0
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
                const catchOutput = output?.code.indexOf("Handlebars.registerPartial('../some-partial") >= 0
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
                const catchOutput = output?.code.indexOf("Handlebars.registerPartial('../partialDirs/anotherDir/otherPartial") >= 0
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
                const catchOutput = output.code.indexOf("<div>Failover</div>") >= 0
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
                const catchOutput = output.code.indexOf("printFoo") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
})