# rollup-plugin-handlebars-compiler
A Rollup plugin to pre-compile Handlebars templates to JavaScript functions with support for partials, helpers, and compile options.

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
import handlebarsCompiler from 'rollup-plugin-handlebars-compiler'

export default {
    ...
    plugins: [
        nodeResolve(),
        commonJS(),
        handlebarsCompiler()
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

In addition to the Handlebars Compiler plugin options, any compile option can also be passed.

See [Handlebars Compile Options](https://handlebarsjs.com/api-reference/compilation.html)

```javascript
export default {
    ...
    plugins: [
        ...
        handlebarsCompiler({

            /* Rollup Plugin Handlebars Compiler Options */

            partials, // An object with one or more items of `partialName: partialHandlebarsTemplate`
            helpers, // An object with one or more items of `helperName: function`
            templateData, // An object that passes data to the Handlebars template


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
        })
    ]
}
```



## Details

### Data

To pass data to templates, you can either:
1. Pass data globally to all templates through the `templateData` object to the plugin options.
1. Pass data as a parameter to the JS template function.

### Pass data through plugin options

To pass global data accessible by all templates, simply pass an object to `templateData` in the plugin options.

```javascript
// rollup.config.js
export default {
    plugins: [
        ...
        handlebarsCompiler({
            templateData: {
                firstname: 'John',
                lastname: 'Doe'
            },
        })
    ]
}
```

### Pass data through the template function

To pass data specific to the template function, simply pass an object to the first parameter.

```javascript
// src/js/main.js
import PageTemplate from '../views/page.hbs';
document.body.append(PageTemplate({
    firstname: 'Jane',
    lastname: 'Doe'
}));
```

Both the data from the plugin options and the template function parameter will be accessible in the template. If the data in the template function parameter has the same key as the global data from the plugin options, the data from the template function will override that of the plugin options.

```hbs
{{! src/page.hbs }}
{{! templateData has `firstname: 'John'` and `lastname: 'Doe'` }}
{{! function data parameter has `firstname: 'Jane'` and `lastname: 'Doe'` }}
{{firstname}} {{lastname}}
```

Output:
```html
Jane Doe
```



### Helpers

To pass helpers, simply pass a `helpers` object to the plugin options.

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
        handlebarsCompiler({
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
1. Pass partials to the `partials` object to the plugin options.
1. Use the relative path in the handlebars template/partial.

#### Register through plugin options

To register through plugin options, simply pass the partial content with the partial name as the ID.

```javascript
// rollup.config.js
export default {
    plugins: [
        ...
        handlebarsCompiler({
            partials: {
                titlePartial: fs.readFileSync(path.join(__dirname, './src/title-partial.hbs')).toString()
            },
        })
    ]
}
```

```hbs
{{! src/title-partial.hbs }}
<h1>{{Title}}</h1>
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
{{helper}} will reference the helper "src/helper.js" if this file exists.
{{../helper}} will reference "helper.js" if this file exists.
{{./nested/helper}} will reference the helper "/src/nested/helper.js" if this file exists.
{{[nested/helper] 'helper parameter'}} will reference the helper "/src/nested/helper.js" if this file exists, passes 'helper parameter' as first parameter to helper.
```

The plugin will automatically resolve any nested partials. However, if a relative partial path's name collides with any partial name passed through the plugin options, the partial passed through the plugin options takes precedence.

For example:

```javascript
// rollup.config.js
export default {
    plugins: [
        ...
        handlebarsCompiler({
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