# rollup-plugin-handlebars-compiler
A Rollup plugin for to compile Handlebars templates to JavaScript functions with support for partials, helpers, and precompile options.

See [Rollup](https://rollupjs.org/) and [Handlebars](http://handlebarsjs.com).

## Installation

```
npm i rollup-plugin-handlebars-compiler
```

This plugin and this plugin's version of Handlebars runtime is dependent on NodeJS modules. To use:

```
npm i @rollup/plugin-node-resolve @rollup/plugin-commonjs
```

## Usage

### Rollup Configuration

```javascript
// rollup.config.js
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJS from '@rollup/plugin-commonjs';
import HandlebarsCompiler from 'rollup-plugin-handlebars-compiler'

export default {
    ...
    plugins: [
        nodeResolve(),
        commonJS(),
        HandlebarsCompiler()
    ]
}
```

### Example

```hbs
{{! src/page.hbs }}
<h1>
    {{Title}}
</h1>
{{> ./partials/content }}
```

```hbs
{{! src/partials/content.hbs }}
<p>{{Body}}</p>
```

```javascript
// src/js/main.js
import PageTemplate from '../views/page.hbs';
document.body.append(PageTemplate({
    Title: 'Hello world!'
    Body: 'Lorem ipsum sit dolor amet'
}));
```

Output:
```html
<h1>
    Hello World
</h1>
<p>Lorem ipsum sit dolor amet</p>
```

## Plugin Options

In addition to the Handlebars Compiler plugin options, any `Handlebars.precompile()` option can also be passed.

See [Handlebars Precompile Options](https://handlebarsjs.com/api-reference/compilation.html)

```javascript
export default {
    ...
    plugins: [
        ...
        HandlebarsCompiler({

            /* Rollup Plugin Handlebars Compiler Options */

            partials, // An object with one or more items of `partialName: partialHandlebarsTemplate`
            helpers, // An object with one or more items of `helperName: function`


            /* Handlebars compile options */

            data, // Set to false to disable @data tracking.
            compat, // Set to true to enable recursive field lookup.
            knownHelpers, // Hash containing list of helpers that are known to exist (truthy) at template execution time. Passing this allows the compiler to optimize a number of cases. Builtin helpers are automatically included in this list and may be omitted by setting that value to false.
            knownHelpersOnly, // Set to true to allow further optimizations based on the known helpers list.
            noEscape, // Set to true to not HTML escape any content.
            strict, // Run in strict mode. In this mode, templates will throw rather than silently ignore missing fields. This has the side effect of disabling inverse operations such as {{^foo}}{{/foo}} unless fields are explicitly included in the source object.
            assumeObjects, // Removes object existence checks when traversing paths. This is a subset of strict mode that generates optimized templates when the data inputs are known to be safe.
            preventIndent, // By default, an indented partial-call causes the output of the whole partial being indented by the same amount. This can lead to unexpected behavior when the partial writes pre-tags. Setting this option to true will disable the auto-indent feature.
            ignoreStandalone, // Disables standalone tag removal when set to true. When set, blocks and partials that are on their own line will not remove the whitespace on that line.
            explicitPartialContext, // Disables implicit context for partials. When enabled, partials that are not passed a context value will execute against an empty object.


            /* Handlebars pre-compile options */

            srcName, // Passed to generate the source map for the input file. When run in this manner, the return structure is {code, map} with code containing the template definition and map containing the source map.
            destName, // Optional parameter used in conjunction with srcName to provide a destination file name when generating source maps
        })
    ]
}
```



## Details

### Helpers

To pass helpers, simply pass a `helpers` object to the Handlebars Compiler plugin.

```javascript
// src/helpers.js
export function fullname(firstName, lastName) {
    return `${firstName} ${lastName}`
}

export function list(items, options) {
  const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
  return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
}
```

```javascript
// rollup.config.js
export default {
    import { fullname, list } from 'src/helpers.js'

    ...
    plugins: [
        ...
        HandlebarsCompiler({
            helpers: {
                fullname,
                list,
            },
        })
    ]
}
```

### Partials

To pass partials, you can either:
1. Pass partials to the `partials` object to the Handlebars Compiler plugin.
1. Use the relative path in the handlebars template/partial.

#### Register through plugin options

To register through plugin options. Simply pass the partial content with the partial name as the ID.

```javascript
// rollup.config.js
export default {
    plugins: [
        ...
        HandlebarsCompiler({
            partials: {
                titlePartial: `<h1>{{Title}}</h1>`
            },
        })
    ]
}
```

Output:
```html
<h1>
    Hello World
</h1>
```

### Reference partials by relative path

The plugin resolves partials and helpers automatically. They are looked up relative to the current directory.

```hbs
{{! src/partial/file.hbs }}
{{> template }} will reference "src/partials/template.hbs" if this file exists.
{{> ../template }} will reference "src/template.hbs" if this file exists.
```

The plugin will automatically resolve any nested partials. However, if a relative partial path's name collides with any partial name passed through the plugin options, the partial passed through the plugin options takes precedence.

For example:

```javascript
// rollup.config.js
export default {
    plugins: [
        ...
        HandlebarsCompiler({
            partials: {
                'partials/template': `<h1>I am from the plugin options</h1>`
            },
        })
    ]
}
```

```hbs
{{! src/page.hbs }}
{{> ./partials/template }}
```

```hbs
{{! src/partials/template.hbs }}
<h1>I am from the partial file</h1>
```

Output:
```html
<h1>I am from the plugin options</h1>
```

## Change Log

See the [CHANGELOG.md](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler/blob/main/CHANGELOG.md) file.

## Attribution
This project is heavily inspired by [pcardune/handlebars-loader](https://github.com/pcardune/handlebars-loader) for Webpack and a rollup plugin code snippet to resolve Handlebars partial paths [ba55ie/rollup-plugin-handlebars-nested.js](https://gist.github.com/ba55ie/21045ca9f29f08fa4092798c0f31e3c1).

## License

Mozilla Public License 2.0 (https://opensource.org/license/mpl-2-0nse)