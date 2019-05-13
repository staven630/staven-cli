const path = require('path');

const resolve = (dir, ...args) => path.resolve(dir, ...args);

const output = dir => resolve(process.cwd(), dir);

const dirname = dir =>  path.dirname(dir);

const basename = dir => path.basename(dir);

module.exports = {
  resolve,
  output,
  dirname,
  basename
}