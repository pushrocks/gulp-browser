"use strict";
const plugins = require("./gulpbrowser.plugins");
let browserify = function (transforms = []) {
    if (!Array.isArray(transforms)) {
        transforms = [transforms];
    }
    let forEach = function (file, enc, cb) {
        let bundleCallback = function (err, bufferedContent) {
            if (Buffer.isBuffer(bufferedContent)) {
                file.contents = bufferedContent;
            }
            else {
                plugins.beautylog.error("gulp-browser: .browserify() " + err.message);
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
            plugins.beautylog.warn("gulp-browser: .browserify() file.contents appears to be empty");
            cb(null, file);
        }
        ;
    };
    let atEnd = function (cb) {
        cb();
    }; // no need to clean up after ourselves
    return plugins.through2.obj(forEach, atEnd); // this is the through object that gets returned by gulpBrowser.browserify();
};
module.exports = browserify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VscGJyb3dzZXIuYnJvd3NlcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2d1bHBicm93c2VyLmJyb3dzZXJpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFHbEQsSUFBSSxVQUFVLEdBQUksVUFBUyxVQUFVLEdBQUcsRUFBRTtJQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUVoQyxJQUFJLGNBQWMsR0FBRyxVQUFTLEdBQUcsRUFBRSxlQUFlO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztZQUNwQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXBFLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO2dCQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQztZQUN4RixFQUFFLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQyxDQUFBO0lBRUQsSUFBSSxLQUFLLEdBQUcsVUFBUyxFQUFFO1FBQ25CLEVBQUUsRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFBLENBQUMsc0NBQXNDO0lBRXhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7QUFDNUgsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsVUFBVSxDQUFDIn0=