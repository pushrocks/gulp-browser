# gulp-browser
browserify and other goodies for gulp

### Status
[![build status](https://gitlab.com/pushrocks/gulp-browser/badges/master/build.svg)](https://gitlab.com/pushrocks/gulp-browser/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-browser.svg)](https://david-dm.org/pushrocks/gulp-browser)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-browser/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-browser)
[![codecov.io](https://codecov.io/github/pushrocks/gulp-browser/coverage.svg?branch=master)](https://codecov.io/github/pushrocks/gulp-browser?branch=master)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)

### Usage
gulp-browser is meant to be easy:

#### Browserify:
```typescript
    let gulp = require("gulp");
    let gulpBrowser = require("gulp-browser");
    
    let transforms = [
        {
            transform: "babelify",
            options: {presets: ["es2015"]}
        }
    ];
    
    gulp.task('gulpBrowserTest',function() {
        var stream = gulp.src('./test/*.js')
            .pipe(gulpBrowser.browserify(transforms)) // gulp.browserify() accepts an optional array of tansforms
            .pipe(gulp.dest("./test/browserifiedJS/"));
        return stream;
    });
```

> **Note:** Be aware of how gulp.src creates values of file.base and file.path since that is important to the require statements.

### Dev Information:
[![devDependency Status](https://david-dm.org/pushrocks/gulp-browser/dev-status.svg)](https://david-dm.org/pushrocks/gulp-browser#info=devDependencies)
[![bitHound Dev Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/devDependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)

### Extending this module
If you have ideas for other great browser related gulp pipe stops, feel free to raise an issue on GitHub.

### Contributors
* [Phil Kunz](https://github.com/philkunz)
* [Steffan Donal](https://github.com/SteffanDonal)

### About the maintainer:
[![Project Phase](https://mediaserve.lossless.digital/lossless.com/img/createdby_github.svg)](https://lossless.com/)

[![PayPal](https://img.shields.io/badge/Support%20us-PayPal-blue.svg)](https://paypal.me/lossless)