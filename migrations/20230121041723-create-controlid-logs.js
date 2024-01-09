"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ControlidLogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "PENDING",
      },
      control_number: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      approval_name: {
        type: Sequelize.STRING,
      },
      requester_name: {
        type: Sequelize.STRING,
      },
      countRequests: {
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
    await queryInterface.dropTable("ControlidLogs");
  },
};
