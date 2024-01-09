'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attachmentLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attachmentLogs.init({
    control_id: DataTypes.STRING,
    document_types: DataTypes.STRING,
    filename: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'attachmentLogs',
  });
  return attachmentLogs;
};