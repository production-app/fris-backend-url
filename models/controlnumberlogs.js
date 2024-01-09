const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controlNumberLogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    control_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'controlNumberLogs',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "controlNumberLogs_pkey",
        unique: true,
        fields: [
          { name: "control_number" },
        ]
      },
    ]
  });
};
