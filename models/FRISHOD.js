const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "FRISHOD",
    {
      "s/n": {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      fullnames: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      grade: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      designate: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      department_role: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: true,
        primaryKey: true,
      },
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "FRISHOD",
      schema: "public",
      timestamps: false,
    }
  );
};
