"use strict";
const plugins = require("./gulpbrowser.plugins");
let browserify = function (transforms = []) {
    if (!Array.isArray(transforms)) {
        transforms = [transforms];
    }
    let forEach = function (file, enc, cb) {
        // do this with every chunk (file in gulp terms)
        let bundleCallback = function (err, bufferedContent) {
            // our bundle callback for when browserify is finished
            if (Buffer.isBuffer(bufferedContent)) {
                file.contents = bufferedContent;
            }
            else {
                console.log('gulp-browser: .browserify() ' + err.message);
                cb(new Error(err.message), file);
                return;
            }
            cb(null, file);
        };
        if (file.contents.length > 0) {
            let browserified = plugins.browserify(file, { basedir: file.base });
            transforms.forEach(function (transform) {
                if (typeof transform === 'function') {
                    browserified.transform(transform);
                }
                else {
                    browserified.transform(transform.transform, transform.options);
                }
            });
            browserified.bundle(bundleCallback);
        }
        else {
            console.warn('gulp-browser: .browserify() file.contents appears to be empty');
            cb(null, file);
        }
    };
    let atEnd = function (cb) {
        cb();
    }; // no need to clean up after ourselves
    return plugins.through2.obj(forEach, atEnd); // this is the through object that gets returned by gulpBrowser.browserify();
};
module.exports = browserify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VscGJyb3dzZXIuYnJvd3NlcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2d1bHBicm93c2VyLmJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlEQUFrRDtBQUdsRCxJQUFJLFVBQVUsR0FBRyxVQUFTLFVBQVUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksT0FBTyxHQUFHLFVBQVMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2xDLGdEQUFnRDtRQUVoRCxJQUFJLGNBQWMsR0FBRyxVQUFTLEdBQUcsRUFBRSxlQUFlO1lBQ2hELHNEQUFzRDtZQUN0RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7WUFDbEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBUyxTQUFTO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1lBQzlFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGLElBQUksS0FBSyxHQUFHLFVBQVMsRUFBRTtRQUNyQixFQUFFLEVBQUUsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztJQUV6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNkVBQTZFO0FBQzVILENBQUMsQ0FBQztBQUVGLGlCQUFTLFVBQVUsQ0FBQyJ9