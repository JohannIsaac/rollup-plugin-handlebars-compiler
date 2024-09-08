import fs from 'fs';
import path from 'path';

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options/index';
import { lookupHelperRegistration, lookupPartialRegistration } from './utils/utils';
import { testEmitAssets, testTemplate } from './helpers';
import { getPluginOptions } from '../../lib/plugin-options';

describe('Handlebars Plugin Compiler', () => {

    describe('Handlebars Operations', () => {
        
        it('should load simple handlebars templates', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/simple.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    expect(output).toHaveProperty('code')
                }
            )
        })
        
        it('properly catches errors in template syntax', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/invalid-syntax-error.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchError = err?.message.includes("Parse error")
                    expect(catchError).toBe(true)
                }
            )
        })
    
        it('properly catches errors when unknown helper found', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                knownHelpersOnly: true
            }
    
            testTemplate(
                '../src/invalid-unknown-helpers.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchError = err?.message.includes("You specified knownHelpersOnly")
                    expect(catchError).toBe(true)
                }
            )
        })
    
        it('allows specifying known helpers', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                helpers: {
                    someKnownHelper: () => 'some known helper'
                },
                knownHelpers: {
                    someKnownHelper: true
                },
                knownHelpersOnly: true
            }
    
            testTemplate(
                '../src/with-known-helpers.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchResult = lookupHelperRegistration('someKnownHelper', output?.code)
                    expect(catchResult).toBe(true)
                }
            )
        })
    
        it('should be able to use commonJS helpers', async () => {
            let module = await import('../src/helpers-commonjs/descriptionHelper.js')
            let descriptionHelper = module.default
    
            const pluginOptions: HandlebarsPluginOptions = {
                helpers: {
                    descriptionHelper
                }
            }
    
            testTemplate(
                '../src/with-helpers-commonjs.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupHelperRegistration('descriptionHelper', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should be able to use block helpers', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                helpers: {
                    list: function(items: Array<object>, options) {
                        const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
                        return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
                    }
                }
            }
    
            testTemplate(
                '../src/with-block-helpers.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupHelperRegistration('list', output.code)
                    expect(captureOutput).toBe(true)
                }
            )
    
        })
    
        it('should allow partials to be passed through the plugin options', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                partials: {
                    otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
                }
            }
    
            testTemplate(
                '../src/with-plugin-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('otherPartial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should allow partials to find root relative', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/partialDirs/with-root-relative-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('__ROOT__/src/partialDirs/anotherDir/otherPartial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should allow nested partials to find root relative', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/partialDirs/with-nested-root-relative-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('__ROOT__/src/partialDirs/anotherDir/otherPartial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should allow relative path partial to nest root relative partials', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/partialDirs/with-nested-root-and-nonroot-relative-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchOutput1 = lookupPartialRegistration('__ROOT__/src/partialDirs/anotherDir/referenceAncestor', output?.code)
                    const catchOutput2 = lookupPartialRegistration('__ROOT__/src/partialDirs/otherPartial', output?.code)
                    expect(catchOutput1).toBe(true)
                    expect(catchOutput2).toBe(true)
                }
            )
        })
    
        it('should allow partials to find multiple paths', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/with-dir-partials.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchOutput1 = lookupPartialRegistration('partialDirs/otherPartial', output?.code)
                    const catchOutput2 = lookupPartialRegistration('partialDirs/anotherDir/otherPartial', output?.code)
                    expect(catchOutput1 && catchOutput2).toBe(true)
                }
            )
        })
    
        it('should allow partials from ancestor directory', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/nested-templates/nested/with-ancestor-dir-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('../../some-partial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should allow partials from parent directory', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/nested-templates/with-parent-dir-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('../some-partial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should allow partials from cousin directory', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/nested-templates/with-cousin-dir-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output?.code)
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should use failover content of the partial block if it refers to non-existent partial', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/with-partial-block.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("<div>Failover</div>")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should recognize and render inline partials', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {}
    
            testTemplate(
                '../src/with-inline-partial.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("printFoo")
                    expect(captureOutput).toBe(true)
                }
            )
        })

    })



    describe('Asset Resolvers', () => {
        
        it('should be able to force resolve assets to false', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    resolve: false
                }
            }
    
            testTemplate(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"./images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })

        it('should be able to set external assets by glob in the plugin options', async () => {

            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    resolve: true,
                    external: ['src/images/**']
                }
            }
            
            testTemplate(
                '../src/with-external-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"./images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
        
        it('should resolve src assets without emitting', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    emit: false,
                    resolve: true
                }
            }
    
            testTemplate(
                '../src/with-resolved-src-without-emit.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
        
        it('should be able to use root relative paths for assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    contextPath: 'src'
                }
            }
    
            testTemplate(
                '../src/with-root-relative-src-asset.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
        
        it('should be able to set assets output directory', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    outputDir: 'assets'
                }
            }
    
            testTemplate(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/assets/src/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
        
        it('should be able to set assets output directory with context path', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    contextPath: 'src',
                    outputDir: 'assets'
                }
            }
    
            testTemplate(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/assets/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
        
        it('should resolve img src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve link href assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-link-href.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/styles/bg-red.css")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve audio src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-audio-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/audio/audio.mp3")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve video src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-video-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/video/video.mp4")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve source src audio assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-source-audio.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/audio/audio.mp3")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve source src video assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-source-video.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/video/video.mp4")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve opengraph image content assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-og-image.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const captureOutput = output?.code.includes("\"/src/images/nested/handlebars.png")
                    expect(captureOutput).toBe(true)
                }
            )
        })
    
        it('should resolve multiple assets in srcset', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testTemplate(
                '../src/with-srcset.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const catchOutput1 = output?.code.match(/\W\/src\/images\/nested\/handlebars\.png,?/)
                    const catchOutput2 = output?.code.match(/\W\/src\/images\/nested\/handlebars\.webp,?/)
                    expect(catchOutput1).toBeTruthy()
                    expect(catchOutput2).toBeTruthy()
                }
            )
        })

    })



    describe('Asset Emmiters', () => {

        
        it('should be able to force resolve assets to false', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    resolve: false
                }
            }
    
            testEmitAssets(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
        
        it('should resolve src assets without emitting', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    emit: false,
                    resolve: true
                }
            }

            const processedOptions = getPluginOptions(pluginOptions)
            const output = processedOptions?.assets?.emit
            expect(output).toBeFalsy()
        })
        
        it('should be able to emit assets using root relative paths', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
                assets: {
                    contextPath: 'src'
                }
            }
    
            testEmitAssets(
                '../src/with-root-relative-src-asset.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath?.startsWith('/images')).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
        
        it('should emit img src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-img-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit link href assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
            
            testEmitAssets(
                '../src/with-link-href.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit audio src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-audio-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit video src assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-video-src.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit source src audio assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-source-audio.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit source src video assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-source-video.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit opengraph image content assets', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-og-image.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData = [...output?.values()][0]
                    expect(fileData?.filepath).toBeTruthy()
                    expect(fileData?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData?.content)).toBeTruthy()
                }
            )
        })
    
        it('should emit multiple assets in srcset', async () => {
    
            const pluginOptions: HandlebarsPluginOptions = {
                rootDir: path.join(__dirname, '../'),
            }
    
            testEmitAssets(
                '../src/with-srcset.hbs',
                pluginOptions,
                false,
                async (err, output) => {
                    const fileData1 = [...output?.values()][0]
                    expect(fileData1?.filepath).toBeTruthy()
                    expect(fileData1?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData1?.content)).toBeTruthy()
                    const fileData2 = [...output?.values()][1]
                    expect(fileData2?.filepath).toBeTruthy()
                    expect(fileData2?.outputFilepath).toBeTruthy()
                    expect(ArrayBuffer.isView(fileData2?.content)).toBeTruthy()
                }
            )
        })

    })

})