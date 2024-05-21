const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "vendorDetails",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      vendorsAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      vendorsname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      totalprice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      unitprice: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      inputtedquantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock_in: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stock_out: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reorder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      uuids: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      items: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      invoicenumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pdfurl: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      status_qty: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "vendorDetails",
      schema: "public",
      timestamps: true,
    }
  );
};
