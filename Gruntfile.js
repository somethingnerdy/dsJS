module.exports = function (grunt) {
    function readOptionalJSON( filepath ) {
        var data = {};
        try {
            data = grunt.file.readJSON( filepath );
        } catch ( e ) {}
        return data;
    }

    var srcHintOptions = readOptionalJSON( 'src/.jshintrc' );
    // The concatenated file won't pass onevar
    // But our modules can
    delete srcHintOptions.onevar;

    grunt.loadNpmTasks('grunt-umd');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            preUMD: {
                src: 'src/*.js',
                dest: 'dest/all.js'
            }
        },
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
        },
        umd: {
            'default': {
                src: 'dest/all.js',
                dest: 'dest/all.js',
                objectToExport: 'dsJS',
                globalAlias: 'dsJS',
                indent: 4
            }
        }
    });



    grunt.registerTask('default', ['concat:preUMD', 'umd']);
};