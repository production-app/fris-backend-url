"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("invoiceLogCaptures", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      filename: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      uuid: {
        type: Sequelize.UUID,
        //defaultValue: Sequelize.UUIDV4,
        //  unique: true,
      },
      control_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      who_uploaded: {
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
    await queryInterface.dropTable("invoiceLogCaptures");
  },
};
