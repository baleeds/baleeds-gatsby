require("./src/styles/reset.css");

exports.onClientEntry = function() {
  require(`es6-object-assign`).polyfill();
};
