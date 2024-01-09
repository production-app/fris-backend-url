const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mailLogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    sender_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isShown: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sender_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assignees: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attachment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("OPENED","PENDING","IN-PROGRESS","COMPLETED"),
      allowNull: true,
      defaultValue: "OPENED"
    },
    received_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    assignees_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mailLogs',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "mailLogs_pkey",
        unique: true,
        fields: [
          { name: "ticket_id" },
        ]
      },
    ]
  });
};
