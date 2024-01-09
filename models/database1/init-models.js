var DataTypes = require("sequelize").DataTypes;
var _fris = require("./fris");

function initModels(sequelize) {
  var fris = _fris(sequelize, DataTypes);


  return {
    fris,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
