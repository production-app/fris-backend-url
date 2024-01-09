'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('delegate_tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manager_email: {
        type: Sequelize.STRING
      },
      acting_officer_email: {
        type: Sequelize.STRING
      },
      acting_officer_name: {
        type: Sequelize.STRING
      },
      manager_name: {
        type: Sequelize.STRING
      },
      returned_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('delegate_tables');
  }
};