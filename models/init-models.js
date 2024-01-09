var DataTypes = require("sequelize").DataTypes;
var _auditLogs = require("./auditLogs");

function initModels(sequelize) {
  var auditLogs = _auditLogs(sequelize, DataTypes);


  return {
    auditLogs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
