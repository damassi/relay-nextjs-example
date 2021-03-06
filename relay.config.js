module.exports = {
  src: "./src",
  schema: "./data/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  artifactDirectory: "./src/__generated__",
}
