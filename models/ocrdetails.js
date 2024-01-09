const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocrdetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_account: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_bvn: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shareholder_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shareholder_chn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phones2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scores: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ocrdetails',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ocrdetails_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
