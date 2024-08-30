import { BUILDS, generateBundle, generateOutputs } from "./utils"

describe('Handlebars Plugin', () => {
        
    it('should bundle simple handlebars templates', async () => {
        const { bundle, error } = await generateBundle(BUILDS['simple'])
        expect(bundle).toHaveProperty('generate')
        if (!bundle) fail('No bundle generated')
        const outputs = await generateOutputs(bundle, BUILDS['simple'], false)
        const output = outputs.length && outputs[0]
        const catchOutput1 = output.includes("Title")
        const catchOutput2 = output.includes("A simple template")
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

})