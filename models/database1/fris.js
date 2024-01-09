const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "fris",
    {
      department: {
        type: DataTypes.STRING(55),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(55),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(55),
        allowNull: true,
        primaryKey: true,
      },
    },
    {
      sequelize,
      tableName: "fris",
      schema: "public",
      timestamps: false,
    }
  );
};
