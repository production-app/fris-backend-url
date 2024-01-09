"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vendorDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        // primaryKey: true,
        type: Sequelize.INTEGER,
      },
      vendorsAddress: {
        type: Sequelize.STRING,
      },

      vendorsname: {
        type: Sequelize.STRING,
      },
      totalprice: {
        type: Sequelize.DOUBLE,
      },
      unitprice: {
        type: Sequelize.DOUBLE,
      },
      inputtedquantity: {
        type: Sequelize.INTEGER,
      },
      stock_in: {
        type: Sequelize.INTEGER,
      },
      stock_out: {
        type: Sequelize.INTEGER,
      },
      reorder: {
        type: Sequelize.INTEGER,
      },
      balance: {
        type: Sequelize.INTEGER,
      },
      uuids: {
        type: Sequelize.UUID,
        // defaultValue: Sequelize.UUIDV4,
      },
      items: {
        type: Sequelize.STRING,
      },
      invoicenumber: {
        type: Sequelize.STRING,
      },
      pdfurl: {
        type: Sequelize.STRING,
      },

      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE,
        // type: DataTypes.DATETIME,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vendorDetails");
  },
};
