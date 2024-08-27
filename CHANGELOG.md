# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## 1.0.0 2020-8-24

### Added

- Rollup plugin
- Support for passing pre-compile (and compile) options to the plugin options.
- Support for helpers and partials by passing to the plugin options.
- Support for partials by relative path.



## 1.0.1 2020-8-24

### Added

- Added peer dependencies to package.json



## 1.0.2 2020-8-24

### Changed

- Changed default function name to match plugin name



## 1.0.3 2020-8-24

### Changed

- Completed documentation in [README.md](./README.md)



## 1.0.4 2020-8-24

### Changed

- Shortened documentation.



## 1.0.5 2020-8-25

### Added

- Added `CHANGELONG.md`
- Added [CONTRIBUTING.md](./CONTRIBUTING.md)



## 1.0.6 2020-8-25

### Added

- Simplified Rollup config for building package
- Updated license in `package.json`



## [1.0.7](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/1) 2020-8-25

### Added

- Added support for passing template data to plugin options



## [1.0.8](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/3) 2020-8-25

### Added

- Initial unit test setup

### Changed

- Cleaned up plugin source code into modules



## [1.0.9](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/5)  2020-8-27

### Changed

- Source code refactor
- Changed Rollup config to bundle types declaration file
- Support for `--watch` flag for nested partials
- Improved organization of types



## [1.1.0](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/7)  2020-8-27

### Changed

- Removed Handlebars from bundle
- Require Handlebars as module dependency 



## [1.1.1](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/pull/10)  2020-8-28

### Changed

- Format transformed hbs JS function
- Fixed params `Helpers` type checker
- Handlebars unit tests for templates
- Fixed compiler and runtime bugs to pass all unit tests