const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "consumables",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
      },
      items: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      vendorsname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      reorder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      invoicenumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      inputtedquantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalprice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      unitprice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      pdfurl: {
        type: DataTypes.STRING(255),
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
      balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vendorsAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      requester: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status_qty: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "consumables",
      schema: "public",
      hasTrigger: true,
      timestamps: true,
      indexes: [
        {
          name: "consumables_pkey",
          unique: true,
          fields: [{ name: "items" }],
        },
      ],
    }
  );
};
