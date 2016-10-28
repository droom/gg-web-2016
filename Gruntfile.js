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
        'src/sass/partials/*.sass',
        'src/sass/sections/*.sass'

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
        'src/jade/partials/*.jade',
        'src/jade/partials/footer/*.jade'

        ],
        tasks: ['jade'],
      },

      postcss: {
        files: [
        'src/sass/*.sass',
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
        'src/lib/jquery.waypoints.js',
        // 'src/lib/jquery.inview.js',
        'src/js/glance.js'
        ],
        dest: 'dist/js/glance.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/js/glance.js',
        dest: 'dist/js/glance.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/glance.css': 'src/sass/glance.sass',
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
          src: 'dist/css/glance.css'
        }
      },


      jade: {
        compile: {
          options: {
            pretty: true,
            data: {
              debug: true,
              timestamp: "<%= new Date().getTime() %>"
            }
          },
          files: [{
            expand: true,
            cwd: 'src/jade',
            src: [ '*.jade' ],
            dest: 'dist/',
            ext: '.html'
          }]
        }
      },

    });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // grunt.registerTask('default', [ 'sass', 'postcss', 'jade' ]);

};
