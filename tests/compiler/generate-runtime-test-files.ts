import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

import { HandlebarsPluginOptions } from '../../lib/types/plugin-options/index.js';
import { removeOutputDir, testTemplate } from './helpers.js';

import descriptionHelper from '../src/helpers-commonjs/descriptionHelper.js';

removeOutputDir()

const PREPARATIONS = [
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/simple.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/invalid-syntax-error.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {
            knownHelpersOnly: true
        }
    
        testTemplate(
            '../src/invalid-unknown-helpers.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
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
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {
            helpers: {
                descriptionHelper
            }
        }
    
        testTemplate(
            '../src/with-helpers-commonjs.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
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
            true,
        )
    
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {
            partials: {
                otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
            }
        }
    
        testTemplate(
            '../src/with-plugin-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {
            partials: {
                otherPartial: fs.readFileSync(path.join(__dirname, '../src/partialDirs/anotherDir/otherPartial.hbs')).toString()
            }
        }
    
        testTemplate(
            '../src/with-plugin-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }
    
        testTemplate(
            '../src/partialDirs/with-root-relative-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }
    
        testTemplate(
            '../src/partialDirs/with-nested-root-relative-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }
    
        testTemplate(
            '../src/partialDirs/with-nested-root-and-nonroot-relative-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/with-dir-partials.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/nested-templates/nested/with-ancestor-dir-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/nested-templates/with-parent-dir-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/nested-templates/with-cousin-dir-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/with-partial-block.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {
    
        const pluginOptions: HandlebarsPluginOptions = {}
    
        testTemplate(
            '../src/with-inline-partial.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-link-href.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-audio-src.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-video-src.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-source-audio.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-source-video.hbs',
            pluginOptions,
            true,
        )
    },
    
    async () => {

        const pluginOptions: HandlebarsPluginOptions = {
            rootDir: path.join(__dirname, '../'),
        }

        testTemplate(
            '../src/with-img-src.hbs',
            pluginOptions,
            true,
        )
    },
]

PREPARATIONS.forEach(func => func())