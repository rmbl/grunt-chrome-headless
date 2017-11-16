# grunt-chrome-headless

> Start a Google Chrome headless instance.

## Getting Started
This plugin requires Grunt `1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-chrome-headless --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chrome-headless');
```

## The "chrome_headless" task

### Overview
In your project's Gruntfile, add a section named `chrome_headless` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  chrome_headless: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.port
Type: `Int`
Default value: `9222`

The remote debugging port which Google Chrome should use.

#### options.bin
Type: `String`
Default value: ``

The full path under which Google Chrome can be found. By default `google-chrome`, `google-chrome-stable` and `chromium` are checked.

#### options.args
Type: `Array`
Default value: `[]`

Additional arguments to the command line.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  chrome_headless: {
    options: {
      port: 9222,
      bin: '/usr/bin/google-chrome'
    },
  },
});
```

#### Multiple instances
If you want to run multiple instances, use more than one target.

```js
grunt.initConfig({
  chrome_headless: {
    cucumber: {
      options: {
        port: 9222
      }
    },
    mocha: {
      options: {
        port: 9223
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_0.1.0_
 - Initial release
