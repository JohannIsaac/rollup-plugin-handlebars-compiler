# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.2.1](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/58)  2020-9-15

### Changed

- Documentation update for version 1.2.0



## [1.2.0](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/51)  2020-9-9

### Changed

- Added support for root relative paths for partials (relative from `process.cwd()` by default but can be changed through the `rootDir` plugin option)
- Added support for resolving and emitting assets referenced in Handlebars templates (enabled by default, but emitting and/or resolving can be disabled in the plugin options. [See Documentation](README.md)
- Removed js-beautify package for optimization and because of lack of support



## [1.1.5](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/36)  2020-9-2

### Changed

- Typescript types fix for Handlebars Compiler options in plugin options



## [1.1.4](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/29)  2020-9-1

### Changed

- Fixed support for CJS version of plugin



## [1.1.3](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/16)  2020-8-29

### Added

- Added support for nested partials
- Unit tests for referencing partials from ancestor/parent/cousin-dirs

### Changed

- Fix: Fixed critical bug where passing no plugin options throws an error
- Fix: Removed registering the context template file as a partial
- Added README and test example of passing hbs files to the `partials` plugin options



## [1.1.2](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/12)  2020-8-29

### Changed

- Removed precompile options as passable plugin options as these are currently unnecessary and may be unwanted (this can later be added as a feature)
- Added README and test example of passing hbs files to the `partials` plugin options



## [1.1.1](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/10)  2020-8-28

### Changed

- Format transformed hbs JS function
- Fixed params `Helpers` type checker
- Handlebars unit tests for templates
- Fixed compiler and runtime bugs to pass all unit tests



## [1.1.0](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/7)  2020-8-27

### Changed

- Removed Handlebars from bundle
- Require Handlebars as module dependency 



## [1.0.9](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/5)  2020-8-27

### Changed

- Source code refactor
- Changed Rollup config to bundle types declaration file
- Support for `--watch` flag for nested partials
- Improved organization of types



## [1.0.8](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/3) 2020-8-25

### Added

- Initial unit test setup

### Changed

- Cleaned up plugin source code into modules



## [1.0.7](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/1) 2020-8-25

### Added

- Added support for passing template data to plugin options



## 1.0.6 2020-8-25

### Added

- Simplified Rollup config for building package
- Updated license in `package.json`



## 1.0.5 2020-8-25

### Added

- Added `CHANGELONG.md`
- Added [CONTRIBUTING.md](./CONTRIBUTING.md)



## 1.0.4 2020-8-24

### Changed

- Shortened documentation.



## 1.0.3 2020-8-24

### Changed

- Completed documentation in [README.md](./README.md)



## 1.0.2 2020-8-24

### Changed

- Changed default function name to match plugin name



## 1.0.1 2020-8-24

### Added

- Added peer dependencies to package.json



## 1.0.0 2020-8-24

### Added

- Rollup plugin
- Support for passing pre-compile (and compile) options to the plugin options.
- Support for helpers and partials by passing to the plugin options.
- Support for partials by relative path.
