"use strict";
const { Model } = require("sequelize");

const nanoid = require("nanoid");
const generate = require("nanoid/generate");

module.exports = (sequelize, DataTypes) => {
  class controlNumberLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ requistionLogs }) {
      // define association here

      this.hasMany(requistionLogs, {
        foreignKey: "control_number",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  controlNumberLogs.init(
    {
      control_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "controlNumberLogs",
    }
  );
  return controlNumberLogs;
};
