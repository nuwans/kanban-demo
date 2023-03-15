/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)",
  ],
};
