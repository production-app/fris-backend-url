'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transferLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transferLogs.init({
    value: DataTypes.STRING,
    label: DataTypes.STRING,
    group: DataTypes.STRING,
    key: DataTypes.INTEGER,
    control_id: DataTypes.STRING,
    ocr_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transferLogs',
  });
  return transferLogs;
};