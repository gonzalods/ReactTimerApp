var webpackConfig = require('./webpack.config.js');

// Ñapa se ve que en Ubuntu 16.04 no funciona bien.
delete webpackConfig.externals; //Se corrige con *

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files:[ //Corregido el probleam *
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack','sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}
