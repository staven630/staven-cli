const pkg = require('./package.json')
const program = require('commander')

program.version(pkg.version, '-v, --version')

program
  .command('tpl <filename> [args...]')
  .alias('t')
  .description('Generate template files')
  .action((filename, args, options) => {
    require('./libs/add/tpl.js')(filename, args, options)
  })

program
  .command('add <configName> [args...]')
  .alias('a')
  .description('Adding configuration files')
  .action((configName, args, options) => {
    require('./libs/add/index.js')(configName, args, options)
  })

program.parse(process.argv)
