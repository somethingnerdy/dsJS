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
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            preUMD: {
                src: ['src/_core.js', 'src/stack.js', 'src/queue.js'],
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
        },
        mocha_istanbul: {
            coveralls: {
                src: ['test/*.js'],
                options : {
                    coverage: true,
                    check : {
                        lines:80,
                        statements: 80
                    },
                    root: './',
                    reportFormats: ['html','lcov']
                }
            }
        },
        istanbul_check_coverage: {
            default: {
                options: {
                    coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
                    check: {
                        lines: 80,
                        statements: 80
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['concat:preUMD', 'umd', 'mocha_istanbul:coveralls']);
    //grunt.registerTask('dev', ['jshint', ''])
};