module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/'],
      tmp: ['.tmp/']
    },
    copy: {
      scripts: {
        expand: true,
        cwd: '.tmp',
        src: [
          'scripts.js',
          'scripts.template.js'
        ],
        dest: 'dist/',
        rename: function(dest, src) {
          return dest + src.replace('scripts','radio-buttons');
        }
      },
      styles: {
        expand: true,
        flatten: true,
        src: 'src/**/*.css',
        dest: 'dist'
      }
    },
    concat: {
      scripts: {
        src: [
          'src/**/*.js',
          '!src/**/*.spec.js'
        ],
        dest: '.tmp/scripts.js',
        options: {
          process: function(src) {
            // Remove templates dependency from non-templates version if exists
            return src.replace(/,\n    'eha\.radio-buttons\.template'/, '');
          }
        }
      },
      scriptsWithTemplateDeps:{
        src: [
          'src/**/*.js',
          '!src/**/*.spec.js'
        ],
        dest: '.tmp/scripts.template.deps.js'
      },
      template: {
        src: [
          '.tmp/template.js',
          '.tmp/scripts.template.deps.js'
        ],
        dest: '.tmp/scripts.template.js'
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      tmp: {
        files: [{
          expand: true,
          src: ['.tmp/**/*.js']
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/radio-buttons.template.min.js': ['.tmp/scripts.template.js'],
          'dist/radio-buttons.min.js': ['.tmp/scripts.js']
        }
      }
    },
    html2js: {
      dist: {
        src: ['src/**/*.tpl.html'],
        dest: '.tmp/template.js',
        module: 'eha.radio-buttons.template',
        options: {
          rename: function(moduleName) {
            var parts = moduleName.split('/');
            var index = parts.indexOf('src');
            parts = parts.slice(index + 1, parts.length);
            return 'templates/' + parts.join('/');
          }
        }
      }
    }
  });

  grunt.registerTask('template', ['html2js']);

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean',
      'template',
      'concat:scripts',
      'concat:scriptsWithTemplateDeps',
      'concat:template',
      'ngAnnotate',
      'copy:scripts',
      'copy:styles',
      'uglify:dist'
    ]);
  });

  grunt.registerTask('default', ['build']);
};
