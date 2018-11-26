var orm = require("../config/orm.js");
var burger = {
    all: function(obj) {
      orm.all("burgers", function(res) {
        obj(res);
      });
    },
    create: function(cols, vals, obj) {
      orm.create("burgers", cols, vals, function(res) {
        obj(res);
      });
    },
    update: function(objColVals, condition, obj) {
      orm.update("burgers", objColVals, condition, function(res) {
        obj(res);
      });
    }
  };
  module.exports = burger;