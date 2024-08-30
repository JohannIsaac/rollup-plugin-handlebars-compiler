import fs from 'fs'
import path from 'path';

const pathToSrc = '../src'

const testResultsDir = './results'
const absoluteTestResultsDir = path.resolve(__dirname, testResultsDir)
export function removeTestResultsDir() {
    if (fs.existsSync(absoluteTestResultsDir)) {
        fs.rmdirSync(absoluteTestResultsDir, { recursive: true });
    }
}

function createTemplateTestResult(template, output) {
    const templatePathFromSrc = path.relative(pathToSrc, template)

    const resultsDirectory = path.dirname(templatePathFromSrc)
    const extname = path.extname(template)
    const basename = path.basename(template, extname)
    const filename = `${basename}.html`
    const filepath = path.join(absoluteTestResultsDir, resultsDirectory, filename)
    try {
        const outputDir = path.dirname(filepath)
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(filepath, output)
    } catch (e) {
        console.error('Could not create test result', filepath)
        console.error(e)
    }
}

function getTemplateModulePath(template) {
    const templatePathFromSrc = path.relative(pathToSrc, template)

    const templateDir = path.dirname(templatePathFromSrc)
    const extname = path.extname(template)
    const basename = path.basename(template, extname)
    const moduleName = `${basename}.js`
    const modulePath = path.join(__dirname, 'functions', templateDir, moduleName)
    return modulePath
}

async function getTemplate(template) {
    const modulePath = getTemplateModulePath(template)
    const module = await import(`${modulePath}`)
    const esTemplate = module.default
    return esTemplate
}

export async function testTemplate(template, data, testFn = (err, output) => {}) {
    let err = null
    let output = null
    try {
        let templateFn = await getTemplate(template)
        output = templateFn(data)
    } catch (e) {
        err = e
    }
    createTemplateTestResult(template, output || '')

    testFn(err, output)
}