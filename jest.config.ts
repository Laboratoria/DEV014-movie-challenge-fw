module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',  // Cambiar a 'jsdom'
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    
    transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: 'tsconfig.json'
          }
        ]
      },
      testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      transformIgnorePatterns: ['<rootDir>/node_modules/(?!.*\\.(mjs|jsx?|tsx?)$)'],
      moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js'
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
    
  };