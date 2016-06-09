var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline: true,
  hot: true,
  colors: true,
  historyApiFallback: true,
  /* Send API requests on localhost to API server get around CORS */
  proxy: {
    '/topic*': {
      'target': 'http://localhost:8080',
      'secure': false
    }
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
