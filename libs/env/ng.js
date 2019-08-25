const path = require('path')
const fs = require('fs')

module.exports = (args) => {
  const prodtsPath = path.resolve(process.cwd(), 'src/environments/environment.prod.ts')
  const angularPath = path.resolve(process.cwd(), './angular.json')
  const pkgPath = path.resolve(process.cwd(), './package.json')
  try {
    let pkg = fs.readFileSync(pkgPath).toString()
    pkg = JSON.parse(pkg)
    let angularJSON = fs.readFileSync(angularPath).toString()
    fs.writeFileSync(angularPath.replace('.json', '.cache.json'), angularJSON)
    let json = JSON.parse(angularJSON)
    let configurations = json.projects[json.defaultProject].architect.build.configurations;
    const production = configurations.production

    for (let index in args) {
      const item = args[index]
      pkg.scripts = {
        ...pkg.scripts,
        [item]: `ng build --configuration=${item} --aot --vendor-chunk`
      }
      json.projects[json.defaultProject].architect.build.configurations = {
        ...json.projects[json.defaultProject].architect.build.configurations,
        [item]: {
          ...production,
          fileReplacements: [
            {
              "replace": `src/environments/environment.ts`,
              "with": `src/environments/environment.${item}.ts`
            }
          ]
        }
      }
    }
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
    fs.writeFileSync(angularPath, JSON.stringify(json, null, 2))
  } catch (error) {
    throw new Error(`读取${prodtsPath}文件失败`);
  }
}