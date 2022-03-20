module.exports = {
  plugins: ["jest", "jest-dom", "testing-library"],
  extends: "next/core-web-vitals",
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
}
