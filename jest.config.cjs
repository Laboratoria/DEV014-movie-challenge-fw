module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom-global",
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.css$": "<rootDir>/src/__mocks__/file-mock.cjs",
    "^.+\\.(css|png|jpg|jpeg|svg)$": "<rootDir>/src/__mocks__/file-mock.cjs",
  },

};
