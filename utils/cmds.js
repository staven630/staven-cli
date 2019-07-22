const huskyStr = 'husky lint-staged'
const commitizenStr =
  '@commitlint/cli @commitlint/config-conventional commitizen commitlint-config-cz conventional-changelog conventional-changelog-cli cz-customizable standard-version'

module.exports = {
  huskyStr: huskyStr,
  commitizenStr: commitizenStr,
  husky: `npm i -D ${huskyStr}`,
  yarnHusky: `yarn add -D ${huskyStr}`,
  initHusky: `npm init -y && npm i -D ${huskyStr}`,
  initYarnHusky: `npm init -y && yarn add -D ${huskyStr}`,
  commitizen: `npm i -D ${commitizenStr}`,
  yarnCommitizen: `yarn add -D ${commitizenStr}`,
  initCommitizen: `npm init -y && npm i -D ${commitizenStr}`,
  initYarnCommitizen: `npm init -y && yarn add -D ${commitizenStr}`
}
