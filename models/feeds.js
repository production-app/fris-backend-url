const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Feeds', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    countRequests: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    control_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    requester_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("PENDING","APPROVED","FULFILLED"),
      allowNull: true,
      defaultValue: "PENDING"
    },
    approver_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Feeds',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "Feeds_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
