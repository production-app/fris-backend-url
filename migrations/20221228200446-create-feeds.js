"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Feeds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      countRequests: {
        type: Sequelize.STRING,
      },
      read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      control_number: {
        type: Sequelize.STRING,
      },

      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      requester_email: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("PENDING", "APPROVED", "FULFILLED"),
        defaultValue: "PENDING",
      },
      approver_email: {
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
    await queryInterface.dropTable("Feeds");
  },
};
