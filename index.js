const { stringifyRequest } = require('loader-utils');

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function nodeLoader() {
  return (
    `try {global.process.dlopen(module, ${stringifyRequest(
      this,
      this.resourcePath
    )}); } catch(e) {` +
    `throw new Error('node-loader: Cannot open ' + ${stringifyRequest(
      this,
      this.resourcePath
    )} + ': ' + e);}`
  );
};
