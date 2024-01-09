"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("feedsadminlogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      control_number: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("PENDING", "APPROVED", "FULFILLED"),
        defaultValue: "PENDING",
      },
      approver_email: {
        type: Sequelize.STRING,
      },
      requester_email: {
        type: Sequelize.STRING,
      },
      countRequests: {
        type: Sequelize.STRING,
      },
      uuid: {
        type: Sequelize.UUID,
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
    queryInterface.addColumn("feedsadminlogs", "deletedAt", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("feedsadminlogs");
  },
};
