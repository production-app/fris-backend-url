const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('edividendtables', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fileUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'edividendtables',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "edividendtables_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
