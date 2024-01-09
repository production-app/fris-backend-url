const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rejectedlogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estock_reasons: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    edas_reasons: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transfer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rejectedlogs',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "rejectedlogs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
