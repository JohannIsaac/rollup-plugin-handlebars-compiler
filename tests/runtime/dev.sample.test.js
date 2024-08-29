/**
 * @jest-environment jsdom
 */



/* Sample dev.test.ts */




import { removeTestResultsDir, testTemplate } from './utils';

removeTestResultsDir()

describe('handlebars rutime', () => {

    /* ------ Write your own Jest tests -----

    it('should render simple handleabrs template', async () => {
        await testTemplate(
            './dev/template.hbs',   // Exactly same relative path as from `../plugin/dev.test.ts`
            {},
            async (err, output) => {
                const catchOutput1 = output.includes("Title")
                const catchOutput2 = output.includes("A simple template")
                expect(catchOutput1 && catchOutput2).toBe(true)
            }
        )
    })

    --------------------------------------- */

})