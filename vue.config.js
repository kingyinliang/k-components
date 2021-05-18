const path = require('path')

const configureWebpack = {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'examples'),
      src: path.join(__dirname, 'src'),
      packages: path.join(__dirname, 'packages')
    }
  }
}

const page = {
  outputDir: path.join(__dirname, './dist'),
  entry: 'examples/main.ts',
  template: 'public/index.html',
  filename: 'index.html'
}

module.exports = {
  outputDir: page.outputDir,
  configureWebpack,
  pages: { index: page }
}
