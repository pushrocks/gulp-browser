# @pushrocks/gulp-browser
browserify and other goodies for gulp

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/gulp-browser)
* [gitlab.com (source)](https://gitlab.com/pushrocks/gulp-browser)
* [github.com (source mirror)](https://github.com/pushrocks/gulp-browser)
* [docs (typedoc)](https://pushrocks.gitlab.io/gulp-browser/)

## Status for master
[![build status](https://gitlab.com/pushrocks/gulp-browser/badges/master/build.svg)](https://gitlab.com/pushrocks/gulp-browser/commits/master)
[![coverage report](https://gitlab.com/pushrocks/gulp-browser/badges/master/coverage.svg)](https://gitlab.com/pushrocks/gulp-browser/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/gulp-browser.svg)](https://www.npmjs.com/package/@pushrocks/gulp-browser)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/gulp-browser/badge.svg)](https://snyk.io/test/npm/@pushrocks/gulp-browser)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

#### Browserify:

```javascript
let gulp = require('gulp');
let gulpBrowser = require('gulp-browser');

let transforms = [
  {
    transform: 'babelify',
    options: { presets: ['es2015'] }
  }
];

gulp.task('gulpBrowserTest', function() {
  var stream = gulp
    .src('./test/*.js')
    .pipe(gulpBrowser.browserify(transforms)) // gulp.browserify() accepts an optional array of tansforms
    .pipe(gulp.dest('./test/browserifiedJS/'));
  return stream;
});
```

> **Note:** Be aware of how gulp.src creates values of file.base and file.path since that is important to the require statements.

### Contributors

- [Phil Kunz](https://github.com/philkunz)
- [Steffan Donal](https://github.com/SteffanDonal)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
