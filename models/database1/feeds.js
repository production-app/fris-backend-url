"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ requistionLogs }) {
      // define association here
      this.belongsTo(requistionLogs, {
        foreignKey: "uuid",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Feeds.init(
    {
      countRequests: DataTypes.STRING,
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      control_number: {
        type: DataTypes.STRING,
      },
      uuid: {
        type: DataTypes.UUID,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "APPROVED", "FULFILLED"),
        defaultValue: "PENDING",
      },
      requester_email: DataTypes.STRING,
      approver_email: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Feeds",
      paranoid: true,
    }
  );
  return Feeds;
};
