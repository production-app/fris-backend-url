"use strict";

const nanoid = require("nanoid");
const generate = require("nanoid/generate");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("controlNumberLogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      control_number: {
        type: Sequelize.STRING,
        primaryKey: true,
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
    await queryInterface.dropTable("controlNumberLogs");
  },
};
