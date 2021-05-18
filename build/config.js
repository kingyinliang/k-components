const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')
const Components = require('../components.json')

// const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'))
// const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
// const transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'))
let externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`k-components/packages/${key}`] = `k-components/lib/${key}`
})

// externals['k-components/src/locale'] = 'k-components/lib/locale'
// utilsList.forEach(function (file) {
//   file = path.basename(file, '.js')
//   externals[`k-components/src/utils/${file}`] = `k-components/lib/utils/${file}`
// })
// mixinsList.forEach(function (file) {
//   file = path.basename(file, '.js')
//   externals[`k-components/src/mixins/${file}`] = `k-components/lib/mixins/${file}`
// })
// transitionList.forEach(function (file) {
//   file = path.basename(file, '.js')
//   externals[`k-components/src/transitions/${file}`] = `k-components/lib/transitions/${file}`
// })

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  '@': path.resolve(process.cwd(), './examples'),
  src: path.resolve(process.cwd(), './src'),
  packages: path.resolve(process.cwd(), './packages'),
  'k-components': path.resolve(__dirname, '../')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
