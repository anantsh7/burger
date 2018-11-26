var orm = require("../config/orm.js");
var burger = {
    all: function(e) {
      orm.all("burgers", function(res) {
        e(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, e) {
      orm.create("burgers", cols, vals, function(res) {
        e(res);
      });
    },
    update: function(objColVals, condition, e) {
      orm.update("burgers", objColVals, condition, function(res) {
        e(res);
      });
    }
  };
  module.exports = burger;