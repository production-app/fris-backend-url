"use strict";

const nanoid = require("nanoid");
const generate = require("nanoid/generate");
const Datastore = require("nedb");
const schedule = require("node-schedule");

const database = new Datastore("database.db");

database.loadDatabase();

// const timeout = setImmediate(() => {
//   const data = generate("0123456789ABCDE", 6);
//   database.insert({ data, key: 1 });
// });

// const timeoutObj = setInterval(() => {
//   const data = generate("0123456789ABCDE", 6);
//   database.update({ key: 1 }, { data, key: 1 }, {}, function (er, output) {
//     console.log(output);
//   });

// }, 11000);

// timeout;

// timeoutObj;

let alphabets;

const crons = schedule.scheduleJob("*/9 * * * * *", function () {
  alphabets = generate("ABCDEFGHIJKL", 2);
  // console.log(alphabets);
  return alphabets;
});

const moment = require("moment");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class frisopsupload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  frisopsupload.init(
    {
      batch_id: {
        type: DataTypes.STRING,
        defaultValue: `Batch ${crons.job()}-${moment(new Date()).format("L")}`,
      },
      control_id: {
        type: DataTypes.STRING,
        //defaultValue: nanoid(6)
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING,
      },
      scores: {
        type: DataTypes.INTEGER,
      },
      filename: {
        type: DataTypes.STRING,
      },

      filetype: {
        type: DataTypes.STRING,
      },

      key: {
        type: DataTypes.INTEGER,
      },

      transfer: {
        type: DataTypes.STRING,
        defaultValue: "DOC-CAPTURE",
      },

      initiator: {
        //allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "frisopsupload",
    }
  );
  return frisopsupload;
};
