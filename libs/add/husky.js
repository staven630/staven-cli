const Utils = require('../../utils/index')
const Vars = require('../../utils/contants')
const Cmds = require('../../utils/cmds')
const spinner = require('ora')()

const modifyPkg = function() {
  Utils.modifyPkg(spinner, data => {
    let pkg = data
    let scripts = pkg.scripts
    if (!scripts) {
      scripts = {}
    }
    scripts.commit = 'git-cz'
    scripts['commit:retry'] = 'git-cz --retry'
    scripts['commit:noverify'] = 'git-cz --no-verify'
    scripts['precommit'] = 'npm run build && lint-staged'
    pkg.husky = {
      hooks: {
        'pre-commit': 'npm run precommit',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        'pre-push': 'npm run test'
      }
    }
    pkg['lint-staged'] = {
      'src/**/*.+(js|ts|tsx|md|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
        'prettier --write',
        'eslint --fix',
        'eslint',
        'git add'
      ]
    }
    return pkg
  })
}

module.exports = function() {
  Utils.stat(
    Vars.pkgPath,
    () => {
      Utils.install(Cmds.husky, Cmds.yarnHusky, spinner, Cmds.huskyStr, () => {
        modifyPkg()
      })
    },
    () => {
      Utils.install(
        Cmds.initHusky,
        Cmds.initYarnHusky,
        spinner,
        Cmds.huskyStr,
        () => {
          modifyPkg()
        }
      )
    }
  )
}
