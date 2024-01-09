const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "frisopsuploads",
    {
      id: {
        // autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      batch_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: "Batch CB-10/05/2022",
      },
      control_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      scores: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      filename: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      filetype: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      transfer: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      key: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      initiator: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "frisopsuploads",
      schema: "public",
      timestamps: true,
      indexes: [
        {
          name: "frisopsuploads_pkey",
          unique: true,
          fields: [{ name: "control_id" }],
        },
      ],
    }
  );
};
