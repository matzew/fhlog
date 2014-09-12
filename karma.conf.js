'use strict';

module.exports = function(config) {
  config.set({

    frameworks: ['mocha'],

    files: [
      './test/browser/bundle.js'
    ],

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: 'INFO',
    captureTimeout: 60000,

    autoWatch: false,

    browsers: ['Chrome', 'Safari', 'Opera', 'Firefox'],

    singleRun: true
  });
};
