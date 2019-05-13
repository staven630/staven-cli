const fs = require('fs');
const mkdirp = require('mkdirp');
const Paths = require('./paths');
const Utils = require('./utils');

const emptyCb = () => {}

const isExist = dir => {
  return fs.existsSync(dir);
}

const mkdir = (dir, cb, errCb) => {
  if (!fs.existsSync(dir)) {
    mkdirp(dir, err => {
      if (err) return errCb && errCb()
      cb && cb();
    })
  } else {
    cb && cb();
  }
}

const write = (filename, data) => {
  mkdir(Paths.dirname(filename), () => {
    try {
      fs.writeFileSync(filename, data, 'utf8');
      Utils.log(`创建${filename}成功!`)
    } catch (error) {
      Utils.log(`创建${filename}失败!`, 'red')
    }
  });
}

const writeFile = (dir, data = '', override = 0) => {
  const filename = Paths.output(dir);
  if (!isExist(filename) || override === 1) {
    write(filename, data);
  } else {
    Utils.prompt([{ type: 'confirm', name: 'override', message: 'Does the file already exist and overwrite it?', default: false }], (answers) => {
      if (answers.override) {
        writeFile(dir, data, 1);
      }
    });
  }
}

module.exports = {
  isExist,
  mkdir,
  writeFile
}