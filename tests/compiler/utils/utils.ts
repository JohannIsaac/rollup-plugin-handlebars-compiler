const ws = "[\\n\\r\\s]*"
const q = `["']`

export function lookupPartialRegistration(partialName: string, code: string) {
    const searchRegex = new RegExp(`Handlebars${ws}\\.registerPartial${ws}\\(${ws}${q}${partialName}${ws}${q}`)
    const result = searchRegex.test(code)
    return result
}

export function lookupHelperRegistration(helperName: string, code: string) {
    const searchRegex = new RegExp(`Handlebars${ws}\\.registerHelper${ws}\\(${ws}${q}${helperName}${ws}${q}`)
    const result = searchRegex.test(code)
    if (helperName === 'description') {
        console.log(result, searchRegex)
        console.log(code)
    }
    return result
}