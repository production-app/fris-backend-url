"use strict";

const nanoid = require("nanoid");
const generate = require("nanoid/generate");
const alphabets = generate("0123456789", 6);

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class consumables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ requistionLogs }) {
      // define association here

      this.hasMany(requistionLogs, {
        foreignKey: "items",
      });
    }
  }
  consumables.init(
    {
      items: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      stock_in: DataTypes.INTEGER,
      stock_out: DataTypes.INTEGER,
      balance: DataTypes.INTEGER,
    },
    {
      //initialAutoIncrement: 2000,
      sequelize,
      modelName: "consumables",
      indexes: [
        {
          unique: true,
          fields: ["items"], // you can use multiple columns as well here
        },
      ],
    }
  );
  return consumables;
};
