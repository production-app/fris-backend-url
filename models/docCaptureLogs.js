const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "docCaptureLogs",
    {
      id: {
        // autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      batch_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
      document_types: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      key: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocr_status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      initiator: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      transfer: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      attachments: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      reason_for_returned_job: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      date_of_returned: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      returned_by: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      department_who_returned: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "docCaptureLogs",
      schema: "public",
      timestamps: true,
      indexes: [
        {
          name: "docCaptureLogs_pkey",
          unique: true,
          fields: [{ name: "control_id" }],
        },
      ],
    }
  );
};
