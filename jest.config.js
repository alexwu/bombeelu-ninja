const { defaults } = require("jest-config");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  roots: ["<rootDir>/app/javascript/"],
  modulePaths: ["<rootDir>/app/javascript/"],
  testMatch: ["<rootDir>/app/javascript/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: ["./jest.setup.ts"]
};
