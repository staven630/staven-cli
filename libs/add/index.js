module.exports = function(name, args, options) {
  const list = {
    husky: true,
    commitizen: true
  }
  if (list[name]) {
    require(`./${name}.js`)()
  }
  for (let key of args) {
    if (key !== name && list[key]) {
      require(`./${key}.js`)()
    }
  }
}
