import 'typings-test'

import * as beautylog from 'beautylog'
import * as gulp from 'gulp'
import * as gulpBrowser from '../dist/index.js'
import * as gulpFunction from 'gulp-function'

import * as should from 'should'
import * as q from 'q'


describe('gulpBrowser', function () {
    describe('.browserify', function () {
        it('should run through smoothly', function (done) {
            this.timeout(30000)
            let stream = gulp.src('./test/testBrowserifyNormal.js')
                .pipe(gulpBrowser.browserify())
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(() => {
                    let done2 = q.defer()
                    done()
                    done2.resolve()
                    return done2.promise
                }))
        })

        it('should throw an error, when a module is not found', function (done) {
            let d = require('domain').create()
            let doneCalled = false
            d.on('error',function(error){
                if (!doneCalled) {
                    done()
                    doneCalled = true
                }
            })
            d.run(function() {
                let stream = gulp.src('./test/testBrowserifyError.js')
                    .pipe(gulpBrowser.browserify())
            })
        })

        it('should run through with an empty file', function (done) {
            let stream = gulp.src('./test/testBrowserifyEmpty.js')
                .pipe(gulpBrowser.browserify())
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(done))
        })
        it('should run through work with transforms', function (done) {
            this.timeout(30000)
            let transforms = [
                {
                    transform: 'babelify',
                    options: {presets: ['es2015']}
                }
            ]
            let stream = gulp.src('./test/testBrowserifyNormal.js')
                .pipe(gulpBrowser.browserify(transforms))
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(done))
        })
    })
})
