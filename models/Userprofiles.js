const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Userprofiles",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      isadmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },

      delegate_role: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },

      photo_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      limit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "subscriber",
      },
      nibss_roles: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      designation: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      manager: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      signature_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Userprofiles",
      schema: "public",
      hasTrigger: true,
      timestamps: true,
      indexes: [
        {
          name: "Userprofiles_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
