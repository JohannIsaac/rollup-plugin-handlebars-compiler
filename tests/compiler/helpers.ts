import fs from 'fs';
import path from 'path';

import HandlebarsTransformer from '../../lib/handlebars-transformer';

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options/index';
import { CompileResult } from '../../lib/types/handlebars/index';
import { AssetsMap } from '../../lib/types/source-map/index';
import { js_beautify } from 'js-beautify';

import { getPluginOptions } from '../../lib/index'

type TestFn = (err: Error, output: CompileResult) => {}
type TestEmitFn = (err: Error, output: AssetsMap) => {}

const absoluteTestFunctionsDir = path.join(__dirname, '../runtime/functions')
export function removeOutputDir() {
    if (fs.existsSync(absoluteTestFunctionsDir)) {
        fs.rmdirSync(absoluteTestFunctionsDir, { recursive: true });
    }
}

function loadTemplate(templatePath: string) {
    return fs.readFileSync(templatePath).toString();
}

function createFunctionFile(template: string, output: CompileResult) {

    const absoluteSrcPath = path.join(__dirname, '../src/')

    const absoluteTemplatePath = path.join(__dirname, template)
    const templatePathFromSrc = path.relative(absoluteSrcPath, absoluteTemplatePath)

    const extname = path.extname(template)
    const outputTemplate = path.join(absoluteTestFunctionsDir, templatePathFromSrc)

    const outputDir = path.dirname(outputTemplate)
    const outputName = `${path.basename(template, extname)}.js`
    const outputPath = path.join(outputDir, outputName)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    let code: string = output?.code || ''
    code = !code ? code : js_beautify(code)
    fs.writeFileSync(outputPath, code)
    console.log('\x1b[36mGenerated', `${outputPath}\x1b[0m`)
}

export function testTemplate(template: string, pluginOptions: HandlebarsPluginOptions, toOutputFiles: boolean = true, testFn?: TestFn) {

    let err: Error | undefined
    
    const templatePath = path.join(__dirname, template)
    
    let source: string | null = null
    try {
        source = loadTemplate(templatePath)
    } catch (e) {
        err = e
        return
    }

    const processedOptions = getPluginOptions(pluginOptions)

    let output: CompileResult | null = null
    try {
        const hbsTransformer = new HandlebarsTransformer(processedOptions, source, templatePath)
        output = hbsTransformer.transform()
    } catch (e) {
        err = e
    }

    if (testFn) testFn(err, output)

    if (toOutputFiles) createFunctionFile(template, output)

}

export function testEmitAssets(template: string, pluginOptions: HandlebarsPluginOptions, toOutputFiles: boolean = true, testEmitFn?: TestEmitFn) {

    let err: Error | undefined
    
    const templatePath = path.join(__dirname, template)
    
    let source: string | null = null
    try {
        source = loadTemplate(templatePath)
    } catch (e) {
        err = e
        if (testEmitFn) testEmitFn(err, null)
        return
    }

    const processedOptions = getPluginOptions(pluginOptions)

    let output: AssetsMap | null = null
    try {
        const hbsTransformer = new HandlebarsTransformer(processedOptions, source, templatePath)
        output = hbsTransformer.getAssetsMap()
    } catch (e) {
        err = e
    }

    if (testEmitFn) testEmitFn(err, output)

    // if (toOutputFiles) createFunctionFile(template, output)

}