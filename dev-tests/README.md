# Dev Tests
You can create your own dev tests in this directory (`dev-tests/`).



## Creating Test Templates and Helpers
You can create and reference `.hbs` templates and `.js` helpers inside the `dev-tests/src/` folder



## Compiler Transformer Tests
Create a `dev.test.ts` file in the `dev-tests/compiler/` directory.
Test example is found in [dev-tests/compiler/dev.test.sample.ts](./compiler/dev.test.sample.ts)



## Compiler Runtime Tests
Create a `dev.test.js` file in the `dev-tests/runtime/` directory.
Test example is found in [dev-tests/runtime/dev.test.sample.ts](./runtime/dev.test.sample.ts)



## Run Test
Run the test by running `npm run test-dev`