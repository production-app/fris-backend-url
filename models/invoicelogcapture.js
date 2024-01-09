"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class invoiceLogCapture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invoiceLogCapture.init(
    {
      filename: DataTypes.STRING,
      url: DataTypes.STRING,
      control_id: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        // unique: true,
      },
      who_uploaded: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "invoiceLogCapture",
    }
  );
  return invoiceLogCapture;
};
