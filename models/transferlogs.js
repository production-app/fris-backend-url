const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transferLogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    key: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ocr_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transferLogs',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "transferLogs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
