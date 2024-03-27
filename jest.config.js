/* eslint-disable no-undef */
module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "^axios$": "<rootDir>/__mocks__/axios.js",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePattern: ["<rootDir>/node_modules/(?!axios)/"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/index.tsx",
    "!src/serviceWorker.ts",
    "!src/setupTests.ts",
  ],
  snapshotSerializers: ["@emotion/jest/serializer"],
};
