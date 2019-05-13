const Utils = require('../utils/utils');
const Paths = require('../utils/paths');
const Webs = require('../constants/frontweb');

const getOption = (key, args, obj, normal = null) => {
  if (args[key]) {
    args[key] = Utils.toLowerCase(args[key]);
    if (key === 'type' && obj[`${key}s`].includes(args[key])) return args[key];
  }
  return obj[`${key}s`].find(item => args[item]) || normal;
}

const typeQuestions = [
  { type: 'list', name: 'type', message: 'Choose template  type', choices: Webs.types }
];

const initTpl = (name, type, style, lang) => {
  if (Utils.isFrontWeb(type)) {
    return require('../tpls/comp')(name, type, style, lang);
  }
}

module.exports = function(name, args) { 
  let type = getOption('type', args, Webs);
  let style = getOption('style', args, Webs, 'css');
  let lang = getOption('lang', args, Webs, 'js');
  if (!type) {
    Utils.prompt(typeQuestions, (answers) => {
      type = answers.type;
      initTpl(name, type, style, lang);
    });
  } else {
    initTpl(name, type, style, lang);
  }
}