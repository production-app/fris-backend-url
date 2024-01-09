"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class requistionLogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Feeds, consumables, ControlidLogs }) {
      // define association here

      // this.hasMany(Feeds, {
      //   foreignKey: "uuid",
      // });

      this.belongsTo(ControlidLogs, {
        foreignKey: "control_number",
      });

      this.belongsTo(consumables, {
        foreignKey: "items",
        // onUpdate: "cascade",
        // hooks: true,
      });
    }
  }
  requistionLogs.init(
    {
      items: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      user_quantity: DataTypes.INTEGER,
      manager: DataTypes.STRING,
      manager_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      admin_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      manager_email: DataTypes.STRING,
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      requester_email: DataTypes.STRING,
      requester_name: DataTypes.STRING,
      count_of_items: DataTypes.STRING,
      button_ui: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      button_ui_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      button_ui_administrator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      progress_approved: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      progress_declined: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      control_number: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "PENDING",
      },

      admin_status: {
        type: DataTypes.STRING,
        defaultValue: "PENDING",
      },

      expirationDate: {
        type: DataTypes.DATE,
      },

      pickedStatus: {
        type: DataTypes.BOOLEAN,
      },

      remarks: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: "requistionLogs",
    }
  );
  return requistionLogs;
};
