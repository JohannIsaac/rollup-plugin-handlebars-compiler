import { BUILDS, generateBundle, generateOutputs } from "./utils.js"

async function generateDistFiles() {
    try {
        const { bundle, error } = await generateBundle(BUILDS['simple'])
        if (!bundle) fail('No bundle generated')
        await generateOutputs(bundle, BUILDS['simple'], true)
    } catch (e) {
        console.error(e)
    }
}
generateDistFiles()