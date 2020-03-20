require("./src/styles/reset.css");
require("./src/styles/index.css");

exports.onClientEntry = function() {
  require(`es6-object-assign`).polyfill();
};
