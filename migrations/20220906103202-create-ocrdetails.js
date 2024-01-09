'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ocrdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bank_name: {
        type: Sequelize.STRING
      },
      bank_account: {
        type: Sequelize.STRING
      },
      control_id: {
        type: Sequelize.STRING
      },
      bank_bvn: {
        type: Sequelize.BIGINT
      },
      shareholder_name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      shareholder_chn: {
        type: Sequelize.STRING
      },
      operator: {
        type: Sequelize.STRING
      },
      phones2: {
        type: Sequelize.STRING
      },
      scores: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ocrdetails');
  }
};