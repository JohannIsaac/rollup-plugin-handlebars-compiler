/**
 * @jest-environment jsdom
 */

import fs from 'fs'
import path from 'path';

const TEST_TEMPLATE_DATA = {
    title: "Title",
    description: "Description",
    image: "http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    object: { a: "a", b: "b", c: "c" },
}

const testResultsDir = './runtime-tests/results'
if (fs.existsSync(testResultsDir)) {
    fs.rmdirSync(testResultsDir, { recursive: true });
}

function createTemplateTestResult(template, output) {
    const resultsDirectory = path.dirname(template)
    const extname = path.extname(template)
    const basename = path.basename(template, extname)
    const filename = `${basename}.html`
    const filepath = path.join(testResultsDir, resultsDirectory, filename)
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
    const templateDir = path.dirname(template)
    const extname = path.extname(template)
    const basename = path.basename(template, extname)
    const moduleName = `${basename}.js`
    const modulePath = path.join(templateDir, 'functions', moduleName)
    return modulePath
}

async function getTemplate(template) {
    const modulePath = getTemplateModulePath(template)
    const module = await import(`./${modulePath}`)
    const esTemplate = module.default
    return esTemplate
}

async function testTemplate(template, data, testFn = (err, output) => {}) {
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

describe('handlebars rutime', () => {

    it('should render simple handleabrs template', async () => {
        await testTemplate(
            './simple.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput1 = output.indexOf("Title") >= 0
                const catchOutput2 = output.indexOf("A simple template") >= 0
                expect(catchOutput1 && catchOutput2).toBe(true)
            }
        )
    })

    it('properly catches errors in template syntax', async () => {
        await testTemplate(
            './invalid-syntax-error.hbs',
            {},
            async (err, output) => {
                expect(output).toBeFalsy()
            }
        )
    })
    
    it('properly catches errors when unknown helper found', async () => {
        await testTemplate(
            './invalid-unknown-helpers.hbs',
            {},
            async (err, output) => {
                expect(output).toBeFalsy()
            }
        )
    })
    
    it('allows specifying known helpers', async () => {
        await testTemplate(
            './with-known-helpers.hbs',
            {},
            async (err, output) => {
                const catchOutput = output.indexOf("some known helper") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should be able to use commonJS helpers', async () => {
        await testTemplate(
            './with-helpers-commonjs.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.indexOf("Description Description") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials to be passed through the plugin options', async () => {
        await testTemplate(
            './with-plugin-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.indexOf("<p>another: Description</p>") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials to find multiple paths', async () => {
        await testTemplate(
            './with-dir-partials.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput1 = output.indexOf("<h1>Title</h1>") >= 0
                const catchOutput2 = output.indexOf("<p>Description</p>") >= 0
                const catchOutput3 = output.indexOf("<p>Other: Description</p>") >= 0
                const catchOutput4 = output.indexOf("<p>another: Description</p>") >= 0
                expect(catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4).toBe(true)
            }
        )
    })
    
    it('should use failover content of the partial block if it refers to non-existent partial', async () => {
        await testTemplate(
            './with-partial-block.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.indexOf("<div>Failover</div>") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should recognize and render inline partials', async () => {
        await testTemplate(
            './with-inline-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.indexOf("Foo") >= 0
                expect(catchOutput).toBe(true)
            }
        )
    })

})