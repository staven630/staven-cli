const fs = require('fs')
const mkdirp = require('mkdirp')
const shell = require('shelljs')
const Vars = require('./contants')

const fn = () => {}

/**
 * 执行cmd命令
 * @param {*} npmArgs
 * @param {*} yarnArgs
 * @param {*} async
 */

const cmd = function(npmArgs, yarnArgs = null, cb = fn, errCb = fn) {
  if (yarnArgs && shell.which('yarn')) {
    shell.exec(npmArgs, (code, stdout, stderr) => {
      if (code !== 0) {
        return errCb(stderr)
      }
      cb(stdout)
    })
  } else if (npmArgs && shell.which('npm')) {
    shell.exec(npmArgs, (code, stdout, stderr) => {
      if (code !== 0) {
        return errCb(stderr)
      }
      cb(stdout)
    })
  }
}

/**
 * 获取package.json信息
 */
const getPkg = function(cb = fn, errCb = fn) {
  readFile(
    Vars.pkgPath,
    data => {
      cb(JSON.parse(data))
    },
    errCb
  )
}

const callback = function(name, filepath, cb = fn, errCb = fn) {
  fs[name](filepath, (err, data) => {
    if (err) {
      return errCb()
    }
    cb(data)
  })
}

const readFile = function(filepath, cb = fn, errCb = fn) {
  callback('readFile', filepath, cb, errCb)
}

const writeFile = function(filepath, data, cb = fn, errCb = fn) {
  fs.writeFile(filepath, data, 'utf8', err => {
    if (!err) return cb()
    errCb()
  })
}

const stat = function(filepath, cb = fn, errCb = fn) {
  callback('stat', filepath, cb, errCb)
}

/**
 * 判断路径是否存在，不存在则生成
 * @param {*} dir
 * @param {Object} opts
 */
const statDir = function(filepath, cb = fn, errCb = fn) {
  stat(filepath, cb, () => {
    require('mkdirp')(filepath, err => {
      if (err) {
        return errCb()
      }
      cb()
    })
  })
}

const modifyPkg = function(spinner, getData, cb = fn) {
  getPkg(
    data => {
      let pkg = getData(data)
      spinner.text = 'modify package.json'
      writeFile(Vars.pkgPath, JSON.stringify(pkg, null, 2), () => {
        spinner.succeed('package.json is changed')
        cb()
      })
    },
    () => {
      spinner.fail('package.json not found')
    }
  )
}

const install = function(npmArg, yarnArg, spinner, str, cb) {
  spinner.text = `install ${str} \n`
  spinner.start()
  cmd(
    npmArg,
    yarnArg,
    () => {
      spinner.succeed(`Successfully installed ${str}!`)
      cb()
    },
    () => {
      spinner.fail(`failed to install! Please npm i -D ${str}`)
    }
  )
}

module.exports = {
  cmd,
  getPkg,
  readFile,
  writeFile,
  stat,
  statDir,
  modifyPkg,
  install
}
