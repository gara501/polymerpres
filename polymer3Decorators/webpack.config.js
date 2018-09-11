const path = require('path');

module.exports = {
  entry: './card.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development'
}