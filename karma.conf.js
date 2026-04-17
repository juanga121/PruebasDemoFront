module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadlessCI'],

    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    }
  });
};