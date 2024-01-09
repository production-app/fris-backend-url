const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImageUrls', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    image_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ImageUrls',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ImageUrls_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
