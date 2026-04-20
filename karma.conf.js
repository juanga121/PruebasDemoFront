const path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: path.join(__dirname, './coverage/pruebas-demo-front'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' }
      ]
    },

    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};