#!/usr/bin/env node
'use strict';
/**
 * This is the main build script, which augments the base webpack
 * config as necessary, in development vs. prod builds.
*/

const fs = require('fs')

if(process.argv.length != 3) {
  console.log('Unexpected # of arguments received. See the "scripts" section of package.json for usage.');
  process.exit(1);
}

const env = process.argv[2];

const isRelease = env === 'prod';

const wpconfig = require('./webpack.config');
const webpack = require('webpack');
const server = require('webpack-dev-server');
const node_env = isRelease ? 'production' : 'development';

const definitions = new webpack.DefinePlugin({
  'process.env.NODE_ENV' : JSON.stringify(node_env),
});

// passthru desired environment to prevent
// any inconsistencies / developer mistakes
process.env.NODE_ENV = node_env;

wpconfig.plugins.push(definitions);

const compiler = webpack(wpconfig);

function onBuild(err, stats) {
  if(err) console.log('Webpack had some error: ', err);
  if(stats.hasWarnings() || stats.hasErrors())
  {
    const { warnings, errors } = stats.toJson();
    const printLines = l => console.log(l);
    if(errors.length > 0) {
      console.log('DANGER: Build produced ERRORS:');
      errors.forEach(printLines);
    }
    if(warnings.length > 0) {
      console.log('Build produced warnings!');
      warnings.forEach(printLines)
    }
  }

  console.log('New build: ' + stats.hash);
  fs.writeFileSync('build', stats.hash);
}


/**
 * Use webpack dev server in development mode.
 */
if(!isRelease) {
  const devServer = new server(compiler, {
    contentBase : 'www/',
    hot : true,
    publicPath : wpconfig.output.publicPath,
    headers : {'Access-Control-Allow-Origin' : '*'},
  })

  devServer.listen(3000);
  compiler.watch({}, onBuild);
}