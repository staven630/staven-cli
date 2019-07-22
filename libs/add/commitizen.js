const Utils = require('../../utils/index')
const Vars = require('../../utils/contants')
const Cmds = require('../../utils/cmds')
const spinner = require('ora')()
const path = require('path')

const writeCZ = function() {
  const filepath = '.cz-config.js'
  Utils.writeFile(
    path.resolve(process.cwd(), filepath),
    require('../../tpls/cz.tpl'),
    () => {
      spinner.succeed(`Successfully write ${filepath}!`)
    }
  )
}

const writeCommitConfig = function() {
  const commitlintTpl = `module.exports={extends: ['@commitlint/config-conventional', 'cz']}`
  const filepath = 'commitlint.config.js'
  Utils.writeFile(path.resolve(process.cwd(), filepath), commitlintTpl, () => {
    spinner.succeed(`Successfully write ${filepath}!`)
  })
}

const modifyPkg = function() {
  Utils.modifyPkg(
    spinner,
    data => {
      let pkg = data
      let scripts = pkg.scripts
      if (!scripts) {
        scripts = {}
      }
      scripts.commit = 'git-cz'
      scripts['commit:retry'] = 'git-cz --retry'
      scripts['commit:noverify'] = 'git-cz --no-verify'
      scripts['precommit'] = 'npm run build && lint-staged'
      scripts['release'] = 'standard-version'
      scripts['push'] = 'git push --follow-tags origin master'
      if (!pkg.husky) {
        pkg.husky = {
          hooks: {
            'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
          }
        }
      } else if (!pkg.husky.hooks) {
        pkg.husky.hooks = {
          'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
        }
      } else {
        pkg.husky.hooks['commit-msg'] = 'commitlint -E HUSKY_GIT_PARAMS'
      }

      pkg['config'] = {
        commitizen: {
          path: './node_modules/cz-customizable'
        },
        'cz-customizable': {
          config: './.cz-config.js'
        }
      }
      return pkg
    },
    () => {
      writeCZ()
      writeCommitConfig()
    }
  )
}

module.exports = function() {
  Utils.stat(
    Vars.pkgPath,
    () => {
      Utils.install(
        Cmds.commitizen,
        Cmds.yarnCommitizen,
        spinner,
        Cmds.commitizenStr,
        () => {
          modifyPkg()
        }
      )
    },
    () => {
      Utils.install(
        Cmds.initCommitizen,
        Cmds.initYarnCommitizen,
        spinner,
        Cmds.commitizenStr,
        () => {
          modifyPkg()
        }
      )
    }
  )
}
