"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("requistionLogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      items: {
        type: Sequelize.STRING,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      user_quantity: {
        type: Sequelize.INTEGER,
      },
      manager_qty: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      admin_qty: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      button_ui: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      button_ui_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      button_ui_administrator: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      control_number: {
        type: Sequelize.STRING,
      },

      progress_approved: {
        type: Sequelize.INTEGER,
      },

      progress_declined: {
        type: Sequelize.INTEGER,
      },
      manager: {
        type: Sequelize.STRING,
      },
      manager_email: {
        type: Sequelize.STRING,
      },
      requester_email: {
        type: Sequelize.STRING,
      },
      requester_name: {
        type: Sequelize.STRING,
      },
      count_of_items: {
        type: Sequelize.STRING,
      },
      remarks: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "PENDING",
      },
      admin_status: {
        type: Sequelize.STRING,
        defaultValue: "PENDING",
      },
      pickedStatus: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      expirationDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("requistionLogs");
  },
};
