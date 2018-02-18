const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '.*\\.ts$': '<rootDir>/node_modules/vue-typescript-jest/preprocessor.js',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,vue}',
    '!src/main.ts',
    '!**/node_modules/**'
  ],
  'coveragePathIgnorePatterns': [
    "/node_modules/",
    "/test/.*\\.(ts|js)$",
    "/.*\\.vue$",
    "/src/vue-shims.d.ts"
  ]
}
