const path = require("path");
const cwd = process.cwd();

function isDevMode() {
  return process.env.NODE_ENV == "development";
}

function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
}

module.exports = {
  isDevMode,
  createWebpackAliases,
};
