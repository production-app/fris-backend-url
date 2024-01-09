"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rejectedlogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estock_reasons: {
        type: Sequelize.STRING,
      },
      edas_reasons: {
        type: Sequelize.STRING,
      },
      operator: {
        type: Sequelize.STRING,
      },
      transfer: {
        type: Sequelize.ENUM("NONE", "DOC-CAPTURE"),
        defaultValue: "NONE",
      },
      control_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("rejectedlogs");
  },
};
