"use strict";
const nanoid = require("nanoid");
const generate = require("nanoid/generate");
const alphabets = generate("0123456789", 6);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consumables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      items: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      vendorsname: {
        type: Sequelize.STRING,
      },

      reorder: {
        type: Sequelize.INTEGER,
      },
      invoicenumber: {
        type: Sequelize.INTEGER,
        //defaultValue: null,
      },
      inputtedquantity: {
        type: Sequelize.INTEGER,
      },
      totalprice: {
        type: Sequelize.DECIMAL,
      },
      unitprice: {
        type: Sequelize.DECIMAL,
      },
      pdfurl: {
        type: Sequelize.STRING,
      },
      stock_in: {
        type: Sequelize.INTEGER,
      },
      stock_out: {
        type: Sequelize.INTEGER,
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      vendorsAddress: {
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
    await queryInterface.dropTable("consumables");
  },
};
