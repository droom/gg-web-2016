module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {

      options: {
        livereload: true,
      },

      sass: {
        files: [
        'src/sass/*.sass',
        'src/sass/lib/*.sass',
        'src/sass/sections/*.sass',
        'src/sass/partials/*.sass',
        'src/sass/motion/*.sass'
        ],
        tasks: ['sass'],
      },

      concat: {
        files: ['src/js/*.js'],
        tasks: ['concat']
      },

      jade: {
        files: [
        'src/jade/*.jade',
        'src/jade/sections/*.jade',
        'src/jade/partials/*.jade'
        ],
        tasks: ['jade'],
      },

      postcss: {
        files: [
        'src/sass/*.sass',
        'src/sass/sections/*.sass',
        'src/sass/partials/*.sass'
        ],

        tasks: ['postcss'],
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
        'src/lib/jquery-2.2.0.js',
        'src/lib/easing.js',
        'src/lib/noframework.waypoints.js',
        'src/lib/slick.js',
        'src/js/*.js'
        ],
        dest: 'dist/js/main.min.js',
      },
    },


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'dist/js/main.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/style.css': 'src/sass/style.sass',
        }
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
          ]
        },
        dist: {
          src: 'dist/css/style.css'
        }
      },

      jade: {
        compile: {
          options: {
            pretty: true,
            data: {
              debug: false
            }
          },
          files: {
            "dist/become.html": ["src/jade/become.jade"],
            "dist/index.html": ["src/jade/index.jade"],
            "dist/jobs.html": ["src/jade/jobs.jade"],
            "dist/job.html": ["src/jade/job.jade"]

          }
        }
      }

    });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('default', [ 'sass', 'postcss', 'jade' ]);

};
