"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ControlidLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ requistionLogs }) {
      // define association here

      this.hasMany(requistionLogs, {
        foreignKey: "control_number",
      });
    }
  }
  ControlidLogs.init(
    {
      status: {
        type: DataTypes.STRING,
        defaultValue: "PENDING",
      },
      control_number: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      approval_name: DataTypes.STRING,
      requester_name: DataTypes.STRING,
      countRequests: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ControlidLogs",
    }
  );
  return ControlidLogs;
};
