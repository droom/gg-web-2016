module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
      sass: {
        files: ['css/*.sass'],
        tasks: ['sass']
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/src/money.js',
        dest: 'js/build/money.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/money.css': 'css/money.sass',
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": ["jade/index.jade"]
        }
      }
    }

  });


  // watch me now
  grunt.loadNpmTasks('grunt-contrib-watch');

  // jade
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Sass it up
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};
