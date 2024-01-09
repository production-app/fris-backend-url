"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class feedsadminlogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feedsadminlogs.init(
    {
      read: DataTypes.BOOLEAN,
      control_number: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "APPROVED", "FULFILLED"),
        defaultValue: "PENDING",
      },
      approver_email: DataTypes.STRING,
      countRequests: DataTypes.STRING,
      requester_email: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "feedsadminlogs",
    }
  );
  return feedsadminlogs;
};
