const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('azureUrls', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'azureUrls',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "azureUrls_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
