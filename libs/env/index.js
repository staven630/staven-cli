module.exports = function (name, args, options) {
  const list = {
    ng: 'ng',
    angular: 'ng'
  }

  name = name.toLocaleLowerCase()
  if (list[name]) {
    require(`./${list[name]}.js`)(args)
  }

}
