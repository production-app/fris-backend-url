'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delegate_table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  delegate_table.init({
    manager_email: DataTypes.STRING,
    acting_officer_email: DataTypes.STRING,
    acting_officer_name: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    returned_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'delegate_table',
  });
  return delegate_table;
};