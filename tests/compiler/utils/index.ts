import fs from 'fs';
import path from 'path';
import { js_beautify } from 'js-beautify';

import HandlebarsTransformer from '../../../lib/handlebars-transformer';

import { HandlebarsPluginOptions } from '../../../lib/types/plugin-options';
import { CompileResult } from '../../../lib/types/handlebars';

type TestFn = (err: Error, output: CompileResult) => {}

const testFileDir = '../'
const pathToSrc = '../src'
const absoluteSrcPath = path.join(__dirname, pathToSrc)

const testFunctionsDir = '../../runtime/functions'
const absoluteTestFunctionsDir = path.join(__dirname, testFunctionsDir)
export function removeOutputDir() {
    if (fs.existsSync(absoluteTestFunctionsDir)) {
        fs.rmdirSync(absoluteTestFunctionsDir, { recursive: true });
    }
}

function loadTemplate(templatePath: string) {
    return fs.readFileSync(templatePath).toString();
}

function createFunctionFile(template: string, output: CompileResult) {
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
}

export function testTemplate(template: string, pluginOptions: HandlebarsPluginOptions, testFn: TestFn) {

    let err: Error | undefined
    const hbsTransformer = new HandlebarsTransformer(pluginOptions)

    const templatePath = path.join(__dirname, testFileDir, template)
    
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