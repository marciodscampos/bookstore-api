module.exports = {
    roots: [
      '<rootDir>',
      '<rootDir>/src',
    ],
    modulePaths: [
      '<rootDir>/node_modules',
      '<rootDir>/src',
    ],
    testMatch: [
      '<rootDir>/tests/**/*.spec.ts',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/lib/',
    ],
    verbose: true,
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
      },
    },
    preset: 'ts-jest',
    setupFiles: [
      '<rootDir>/tests/test.config.ts'
    ]
};
