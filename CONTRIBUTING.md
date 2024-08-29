# Contributing to rollup-plugin-handlebars-compiler

If you'd like to discuss a change you want to make before spending the time to write the code, please submit a new [issue](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/issues) first to discuss it.



### Steps for submitting a pull request

1. Create a new branch from `main`
2. Make your necessary changes
3. Run the tslint and unit tests with `npm run test` and resolve any issues.
4. If you are adding a feature, make sure it is documented in the `README.md` file.
5. Update the `CHANGELOG.md` file to reflect your change.



### Setting Up a Local Copy

1. Clone the repo with `git clone https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler.git`.
2. Run `npm install` in the root `rollup-plugin-handlebars-compiler` folder.
3. Run `npm link && npm link rollup-plugin-handlebars-compiler` to link the current project to `node_modules`.
4. If you are writing a change to submit as a pull request, make the changes in a new branch



### Testing

- Run `npm run test` to run unit tests and output test HTML results. HTML output results can be found in [./tests/runtime/output] in the `results` directory, while JS template functions can be found in [./tests/runtime/functions].
- To write your own Jest tests, create a `plugin/dev.test.ts` and a `runtime/dev.test.ts` in the `tests` directory. Examples can be found in `plugin/dev.sample.test.ts` and `runtime/dev.sample.test.ts`.