/**
 * @jest-environment jsdom
 */

import path from 'path'

describe('Handlebars Rollup Output', () => {
        
    it('should load simple handlebars templates', async () => {
        const modulePath = path.join(__dirname, './dist/simple.js')
        const module = await import(modulePath)
        const load = module.default
        load()
    })

})