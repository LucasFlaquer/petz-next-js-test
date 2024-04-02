/* eslint-disable import/no-anonymous-default-export */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testRegex: ['.spec.ts$', '.spec.tsx$'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.tsx'],
  coveragePathIgnorePatterns: ['<rootDir>/src/_tests_/*'],
}
