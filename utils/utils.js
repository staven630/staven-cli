const chalk = require('chalk');
const inquirer = require('inquirer');
const Webs = require('../constants/frontweb');

const log = (text, color = 'green') => {
  console.log(chalk[color](text));
}

const camelize = (str) => {
  return str.replace( /-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getComponentName = (str) => {
  return capitalize(camelize(str));
}

const prompt = (questions, cb) => {
  inquirer
    .prompt(questions)
    .then(function (answers) {
        cb && cb(answers);
    })
};

const toLowerCase = (type) => {
  return (type + '').toLocaleLowerCase();
};


const isFrontWeb = (type) => Webs.types.includes(type);

module.exports = {
  log,
  camelize,
  prompt,
  isFrontWeb,
  toLowerCase,
  getComponentName
}