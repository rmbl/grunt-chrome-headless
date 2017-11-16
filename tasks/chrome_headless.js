/*
 * grunt-chrome-headless
 * https://github.com/rmbl/grunt-chrome-headless
 *
 * Copyright (c) 2017 Philipp Gildein
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('chrome_headless', 'Start a Google Chrome headless instance.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var bin, stopped = false, 
      options = this.options({
        bin: null,
        port: 9222,
        args: []
      });

    if (options.bin == null) {
      var which = require('which'),
        executables = ['google-chrome', 'google-chrome-stable', 'chromium'];
      for (var i = 0; i < executables.length; ++i) {
        bin = which.sync(executables[i], {nothrow: true});
        if (bin !== null) {
          break;
        }
      }
      
      if (bin === null) {
        grunt.fatal('Could not find google-chrome. Try to add a bin option with the full path.');
      }
    } else {
      bin = options.bin;
    }

    var chrome = grunt.util.spawn({
      cmd: bin,
      args: ['--headless', '--remote-debugging-port=' + options.port].concat(options.args || [])
    }, function () {
      stopped = true;
      grunt.fatal('Chrome Headless killed unexpectedly');
    });

  });

};
