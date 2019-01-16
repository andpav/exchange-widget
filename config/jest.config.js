module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/app.js',
  ],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75
    }
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/config/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest-mocks/image.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/test-setup.js',
  testRegex: 'tests/.*\\.test\\.js$'
};
