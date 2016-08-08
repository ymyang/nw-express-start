/**
 * Created by yang on 2016/8/8.
 */
var os = require('os');
var path = require('path');
var gulp = require('gulp');
var shelljs = require('shelljs');
var jetpack = require('fs-jetpack');

var _isMac = os.type() === 'Darwin';

var nwVersion = '0.14.7';

var manifest = jetpack.read('./src/package.json', 'json');

// 启动调试
gulp.task('start', function() {
    var nwjs = 'res/nw/' + nwVersion + '/win32/nw.exe';
    if (_isMac) {
        nwjs = 'res/nw/' + nwVersion + '/osx64/nwjs.app/Contents/MacOS/nwjs';
    }
    var nw = path.join(__dirname, nwjs);
    console.log('nwjs:', nw);
    shelljs.exec(nw + ' ./src');
});

gulp.task('default', ['start']);