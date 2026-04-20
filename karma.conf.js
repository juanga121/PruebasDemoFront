module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/pruebas-demo-front'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' }
      ]
    }
  });
};