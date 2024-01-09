"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ocrdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ docCaptureLog }) {
      // define association here
      this.belongsTo(docCaptureLog, { foreignKey: "control_id" });
      //this.belongsTo(doccapturelogs);
    }
  }
  ocrdetails.init(
    {
      bank_name: DataTypes.STRING,
      shareholder_name: DataTypes.STRING,
      bank_account: DataTypes.STRING,
      control_id: DataTypes.STRING,
      bank_bvn: DataTypes.BIGINT,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      shareholder_chn: DataTypes.STRING,
      operator: DataTypes.STRING,
      phones2: DataTypes.STRING,
      scores: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ocrdetails",
    }
  );
  return ocrdetails;
};
