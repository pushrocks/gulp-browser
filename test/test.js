"use strict";
require("typings-test");
const gulp = require("gulp");
const gulpBrowser = require("../dist/index.js");
const gulpFunction = require("gulp-function");
const q = require("q");
describe('gulpBrowser', function () {
    describe('.browserify', function () {
        it('should run through smoothly', function (done) {
            this.timeout(30000);
            let stream = gulp.src('./test/testBrowserifyNormal.js')
                .pipe(gulpBrowser.browserify())
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(() => {
                let done2 = q.defer();
                done();
                done2.resolve();
                return done2.promise;
            }));
        });
        it('should throw an error, when a module is not found', function (done) {
            let d = require('domain').create();
            let doneCalled = false;
            d.on('error', function (error) {
                if (!doneCalled) {
                    done();
                    doneCalled = true;
                }
            });
            d.run(function () {
                let stream = gulp.src('./test/testBrowserifyError.js')
                    .pipe(gulpBrowser.browserify());
            });
        });
        it('should run through with an empty file', function (done) {
            let stream = gulp.src('./test/testBrowserifyEmpty.js')
                .pipe(gulpBrowser.browserify())
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(done));
        });
        it('should run through work with transforms', function (done) {
            this.timeout(30000);
            let transforms = [
                {
                    transform: 'babelify',
                    options: { presets: ['es2015'] }
                }
            ];
            let stream = gulp.src('./test/testBrowserifyNormal.js')
                .pipe(gulpBrowser.browserify(transforms))
                .pipe(gulp.dest('./test/result/'))
                .pipe(gulpFunction.atEnd(done));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUdyQiw2QkFBNEI7QUFDNUIsZ0RBQStDO0FBQy9DLDhDQUE2QztBQUc3Qyx1QkFBc0I7QUFHdEIsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUNwQixRQUFRLENBQUMsYUFBYSxFQUFFO1FBQ3BCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxVQUFVLElBQUk7WUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2lCQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNyQixJQUFJLEVBQUUsQ0FBQTtnQkFDTixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNYLENBQUMsQ0FBQyxDQUFBO1FBRUYsRUFBRSxDQUFDLG1EQUFtRCxFQUFFLFVBQVUsSUFBSTtZQUNsRSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDbEMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVMsS0FBSztnQkFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksRUFBRSxDQUFBO29CQUNOLFVBQVUsR0FBRyxJQUFJLENBQUE7Z0JBQ3JCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQztxQkFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFFRixFQUFFLENBQUMsdUNBQXVDLEVBQUUsVUFBVSxJQUFJO1lBQ3RELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUM7aUJBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMseUNBQXlDLEVBQUUsVUFBVSxJQUFJO1lBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkIsSUFBSSxVQUFVLEdBQUc7Z0JBQ2I7b0JBQ0ksU0FBUyxFQUFFLFVBQVU7b0JBQ3JCLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2lCQUNqQzthQUNKLENBQUE7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDO2lCQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==