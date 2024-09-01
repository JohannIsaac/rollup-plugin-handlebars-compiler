// Builds a copy of the necessary test files in `dev-tests/`

const fs = require('fs');
const path = require('path');

const TEST_DIR = 'tests/'
const DEV_TEST_DIR = 'dev-tests/'

const compilerFiles = [
    'utils',
    'declarations.d.ts',
    'helpers.ts',
]

const runtimeFiles = [
    'utils.js',
]

function generateCopyData(dir, files) {
    return files.map(file => {
        const filepath = path.join(dir, file)
        let data = {
            from: path.join(__dirname, TEST_DIR, filepath),
            to: path.join(__dirname, DEV_TEST_DIR, filepath)
        }
        return data
    })
}

function generateDevTestFiles() {
    const files = []
    files.push(...generateCopyData('compiler', compilerFiles))
    files.push(...generateCopyData('runtime', runtimeFiles))

    files.forEach(file => {
        fs.cpSync(file.from, file.to, {recursive: true});
        console.log('\x1b[36mGenerated', `${file.to}\x1b[0m`)
    });
}
generateDevTestFiles()