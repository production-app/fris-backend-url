"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rejectedlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rejectedlog.init(
    {
      estock_reasons: DataTypes.STRING,
      edas_reasons: DataTypes.STRING,
      operator: DataTypes.STRING,
      transfer: {
        type: DataTypes.ENUM("NONE", "DOC-CAPTURE"),
        defaultValue: "NONE",
      },
      control_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rejectedlog",
    }
  );
  return rejectedlog;
};
