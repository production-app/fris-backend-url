'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('edividendtables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileUrl: {
        type: Sequelize.TEXT
      },
     
      // reason: {
      //   type: Sequelize.STRING
      // },
      operator: {
        type: Sequelize.STRING
      },
      control_id: {
        type: Sequelize.STRING
      },
      // score: {
      //   type: Sequelize.STRING
      // },

      // transfer: {
      //   type: Sequelize.STRING
      // },
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
    await queryInterface.dropTable('edividendtables');
  }
};