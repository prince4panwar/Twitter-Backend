export default {
  testEnvironment: "node",
  transform: {}, // disable Babel transforms
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // fix .js import paths
  },
};
