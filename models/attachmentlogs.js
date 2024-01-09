const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachmentLogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    document_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attachmentLogs',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "attachmentLogs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
