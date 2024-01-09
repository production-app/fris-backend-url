'use strict';

const nanoid  = require("nanoid");
const generate = require('nanoid/generate')
// const { customAlphabet } = require('nanoid')
 const alphabets = generate('ABCD', 2)
 const moment = require('moment')


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('frisopsuploads', {
      id: {
        allowNull: false,
        autoIncrement: true,
       // primaryKey: true,
        type: Sequelize.INTEGER
      },
      batch_id: {
        type: Sequelize.STRING,
        defaultValue: `Batch ${(alphabets)}-${moment(new Date()).format('L')}`
      },
      control_id: {
        type: Sequelize.STRING,
       //defaultValue: nanoid(6)
       primaryKey: true,
      },
      url: {
        type: Sequelize.STRING
      },
      scores: {
        type: Sequelize.INTEGER
      },
      filename: {
        type: Sequelize.STRING
      },

    filetype: {
        type: Sequelize.STRING
      },

    transfer: {
        type: Sequelize.STRING
      },

      key: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },

     initiator: {
        //allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('frisopsuploads');
  }
};