process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = {
  ...environment.toWebpackConfig(),
  mode: "development",
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  }
}
