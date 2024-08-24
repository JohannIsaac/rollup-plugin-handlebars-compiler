import fs from 'node:fs'

let flags = process.argv.splice(2)

if (flags.includes('--finish')) {
    fs.rmSync('dist/types', { recursive: true, force: true });
} else {
    fs.rmSync('dist', { recursive: true, force: true });
    fs.rmSync('types', { recursive: true, force: true });
}