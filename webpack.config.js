module.exports = {
  entry: './src/client',
  devtool : 'eval',
  output: {
    path : __dirname + '/www/assets',
    jsonpFunction : 'wp',
    filename: '[name].[hash].js',
    chunkFilename: 'chunk.[id].[hash].js',
  },
  resolve : {
    modulesDirectories : [
      'node_modules',
      './src',
    ]
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /(?:node_modules)/,
        loaders : [ 'babel', 'eslint' ],
      },
    ]
  },
  plugins : [], // these are loaded dynamically by build.js as needed
}