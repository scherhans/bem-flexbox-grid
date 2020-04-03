const sass = require('node-sass');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 11']
            },
            target: {
                src: 'dist/flexgrid.css',
                dest: 'dist/flexgrid.css'
            }

        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                processImport: false,
                roundingPrecision: -1,
                shorthandCompacting: false,
                aggressiveMerging: false,
                advanced: false,
            },
            target: {
                files: {
                    'dist/flexgrid.min.css': ['dist/flexgrid.css']
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                outputStyle: "expanded"
            },
            dist: {
                src: 'src/flexgrid.scss',
                dest: 'dist/flexgrid.css'
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*'],
                tasks: ['build'],
                options: {
                },
            },
        }
    });

    grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin']);

}