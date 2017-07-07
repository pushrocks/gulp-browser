import * as beautylog from 'beautylog'
import * as gulp from 'gulp'
import * as gulpFunction from 'gulp-function'
import * as smartq from 'smartq'

import { expect, tap } from 'tapbundle'

import * as gulpBrowser from '../dist/index.js'

tap.test('should run through smoothly', async () => {
  let done = smartq.defer()
  let stream = gulp.src('./test/testBrowserifyNormal.js')
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest('./test/result/'))
    .pipe(gulpFunction.atEnd(async () => {
      done.resolve()
    }))
  await done.promise
})

tap.test('should throw an error, when a module is not found', async () => {
  let done = smartq.defer()
  let d = require('domain').create()
  let doneCalled = false
  d.on('error', function (error) {
    if (!doneCalled) {
      done.resolve()
      doneCalled = true
    }
  })
  d.run(function () {
    let stream = gulp.src('./test/testBrowserifyError.js')
      .pipe(gulpBrowser.browserify())
  })
  await done.promise
})

tap.test('should run through with an empty file', async () => {
  let done = smartq.defer()
  let stream = gulp.src('./test/testBrowserifyEmpty.js')
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest('./test/result/'))
    .pipe(gulpFunction.atEnd(async () => {
      done.resolve()
    }))
  await done.promise
})

tap.test('should run through work with transforms', async () => {
  let done = smartq.defer()
  let transforms = [
    {
      transform: 'babelify',
      options: { presets: [ 'es2015' ] }
    }
  ]
  let stream = gulp.src('./test/testBrowserifyNormal.js')
    .pipe(gulpBrowser.browserify(transforms))
    .pipe(gulp.dest('./test/result/'))
    .pipe(gulpFunction.atEnd(async () => {
      done.resolve()
    }))
  await done.promise
})

tap.start()
