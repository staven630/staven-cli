const pkg = require('./package.json');
const program = require('commander');
const inquirer = require('inquirer');
const Web = require('./constants/frontweb');

const option = (obj, types, flag = 1) => {
  types.forEach(item => obj.option(flag === 2 ? `--${item} [value]` :  `--${item}`, `${item}`));
};

program.version(pkg.version, '-v, --version');

const tpl = program
  .command('tpl <name>')
  .alias('t');
  
option(tpl, Web.types);
option(tpl, Web.langs);
option(tpl, Web.styles);
option(tpl, Web.values, 2);

tpl.action((name, args) => {
    require('./libs/tpl.js')(name, args);
  });

program.parse(process.argv);