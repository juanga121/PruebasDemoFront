import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    browsers: ['ChromeHeadlessNoSandbox'],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    reporters: ['progress', 'kjhtml', 'coverage'],

    coverageReporter: {
      dir: path.join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcov' },
        { type: 'text-summary' }
      ]
    }
  });
}