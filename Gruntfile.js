module.exports = function (grunt) {
    function readOptionalJSON( filepath ) {
        var data = {};
        try {
            data = grunt.file.readJSON( filepath );
        } catch ( e ) {}
        return data;
    }

    var gzip = require( "gzip-js" ),
        srcHintOptions = readOptionalJSON( 'src/.jshintrc' );
    // The concatenated file won't pass onevar
    // But our modules can
    delete srcHintOptions.onevar;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: [
                    "src/**/*.js", "Gruntfile.js", "test/**/*.js", "build/**/*.js"
                ],
                options: {
                    jshintrc: true
                }
            },
            dist: {
                src: "dist/symPerformance.js",
                options: srcHintOptions
            }
        }
    });
};