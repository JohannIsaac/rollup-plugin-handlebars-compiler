import fs from 'fs';
import path from 'path';

import HandlebarsTransformer from '../../lib/handlebars-transformer';

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options';
import { CompileResult } from '../../lib/types/handlebars';
import { js_beautify } from 'js-beautify';

type TestFn = (err: Error, output: CompileResult) => {}

<<<<<<< HEAD:dev-tests/compiler/helpers.ts
const absoluteTestFunctionsDir = path.join(__dirname, '../runtime/functions')
=======
const testFileDir = '../'
const pathToSrc = '../src'
const absoluteSrcPath = path.join(__dirname, pathToSrc)

const testFunctionsDir = '../../runtime/functions'
const absoluteTestFunctionsDir = path.join(__dirname, testFunctionsDir)
>>>>>>> 9e52103684e46341559c728386fbb10e856da966:tests/compiler/utils/index.ts
export function removeOutputDir() {
    if (fs.existsSync(absoluteTestFunctionsDir)) {
        fs.rmdirSync(absoluteTestFunctionsDir, { recursive: true });
    }
}

function loadTemplate(templatePath: string) {
    return fs.readFileSync(templatePath).toString();
}

function createFunctionFile(template: string, output: CompileResult) {
<<<<<<< HEAD:dev-tests/compiler/helpers.ts

    const absoluteSrcPath = path.join(__dirname, '../src/')

=======
>>>>>>> 9e52103684e46341559c728386fbb10e856da966:tests/compiler/utils/index.ts
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

    if (testFn) testFn(err, output)

    if (toOutputFiles) createFunctionFile(template, output)

}