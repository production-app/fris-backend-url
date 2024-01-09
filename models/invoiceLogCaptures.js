const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoiceLogCaptures', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    who_uploaded: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoiceLogCaptures',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "invoiceLogCaptures_pkey",
        unique: true,
        fields: [
          { name: "control_id" },
        ]
      },
    ]
  });
};
