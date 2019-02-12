import * as gulp from 'gulp';
import * as gulpFunction from '@pushrocks/gulp-function';
import * as smartpromise from '@pushrocks/smartpromise';

import { expect, tap } from '@pushrocks/tapbundle';

import * as gulpBrowser from '../ts/index';

tap.test('should run through smoothly', async () => {
  let done = smartpromise.defer();
  let stream = gulp
    .src('./test/testBrowserifyNormal.js')
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest('./test/result/'))
    .pipe(
      gulpFunction.atEnd(async () => {
        done.resolve();
      })
    );
  await done.promise;
});

tap.test('should run through with an empty file', async () => {
  let done = smartpromise.defer();
  let stream = gulp
    .src('./test/testBrowserifyEmpty.js')
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest('./test/result/'))
    .pipe(
      gulpFunction.atEnd(async () => {
        done.resolve();
      })
    );
  await done.promise;
});

tap.test('should run through work with transforms', async () => {
  let done = smartpromise.defer();
  let transforms = [
    {
      transform: 'babelify',
      options: { presets: ['es2015'] }
    }
  ];
  let stream = gulp
    .src('./test/testBrowserifyNormal.js')
    .pipe(gulpBrowser.browserify(transforms))
    .pipe(gulp.dest('./test/result/'))
    .pipe(
      gulpFunction.atEnd(async () => {
        done.resolve();
      })
    );
  await done.promise;
});

tap.start();
