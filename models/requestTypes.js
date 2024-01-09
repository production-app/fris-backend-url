const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requestTypes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    request_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    request_types: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("OPENED","PENDING","IN-PROGRESS","COMPLETED"),
      allowNull: true,
      defaultValue: "OPENED"
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'requestTypes',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "requestTypes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
