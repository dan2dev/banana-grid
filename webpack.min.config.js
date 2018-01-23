var config = require('./webpack.config.js');
config.output.filename = '[name].min.js';
module.exports = config;
