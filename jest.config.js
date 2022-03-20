const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   "\\.(gql|graphql)$": "jest-transform-graphql",
  // },
}

module.exports = createJestConfig(customJestConfig)
