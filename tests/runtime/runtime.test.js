/**
 * @jest-environment jsdom
 */

import { removeTestResultsDir, testTemplate } from './utils';

const TEST_TEMPLATE_DATA = {
    title: "Title",
    description: "Description",
    image: "http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    object: { a: "a", b: "b", c: "c" },
}

removeTestResultsDir()

describe('handlebars rutime', () => {

    it('should render simple handleabrs template', async () => {
        await testTemplate(
            './simple.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput1 = output.includes("Title")
                const catchOutput2 = output.includes("A simple template")
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
                const catchOutput = output.includes("some known helper")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should be able to use commonJS helpers', async () => {
        await testTemplate(
            './with-helpers-commonjs.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("Description Description")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials to be passed through the plugin options', async () => {
        await testTemplate(
            './with-plugin-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("<p>another: Description</p>")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials to find multiple paths', async () => {
        await testTemplate(
            './with-dir-partials.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput1 = output.includes("<h1>Title</h1>")
                const catchOutput2 = output.includes("<p>Description</p>")
                const catchOutput3 = output.includes("<p>Other: Description</p>")
                const catchOutput4 = output.includes("<p>another: Description</p>")
                expect(catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4).toBe(true)
            }
        )
    })
    
    it('should allow partials from ancestor directory', async () => {
        await testTemplate(
            './nested-templates/nested/with-ancestor-dir-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("<p>Description</p>")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials from parent directory', async () => {
        await testTemplate(
            './nested-templates/with-parent-dir-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("<p>Description</p>")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should allow partials from cousin directory', async () => {
        await testTemplate(
            './nested-templates/with-cousin-dir-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("<p>another: Description</p>")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should use failover content of the partial block if it refers to non-existent partial', async () => {
        await testTemplate(
            './with-partial-block.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("<div>Failover</div>")
                expect(catchOutput).toBe(true)
            }
        )
    })
    
    it('should recognize and render inline partials', async () => {
        await testTemplate(
            './with-inline-partial.hbs',
            TEST_TEMPLATE_DATA,
            async (err, output) => {
                const catchOutput = output.includes("Foo")
                expect(catchOutput).toBe(true)
            }
        )
    })

})