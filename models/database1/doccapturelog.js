"use strict";

const nanoid = require("nanoid");
const generate = require("nanoid/generate");
const Datastore = require("nedb");
const schedule = require("node-schedule");
const moment = require("moment");

// let LocalStorage = require("node-localstorage").LocalStorage;
// let localStorage = new LocalStorage("./scratch");

// if (typeof localStorage === "undefined" || localStorage === null) {
//   localStorage = new LocalStorage("./scratch");
// }

let alphabets = generate("ABCDEFGHIJKL", 2);

// const crons = schedule.scheduleJob("*/9 * * * * *", async function () {
//   alphabets = generate("ABCDEFGHIJKL", 2);

//   await localStorage.setItem("cronKeys", alphabets);
//   return alphabets;
//   // console.log(localStorage.getItem("cronKeys"));
// });

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class docCaptureLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ocrdetails }) {
      // define association here
      this.hasMany(ocrdetails, { foreignKey: "control_id" });
    }
  }
  docCaptureLog.init(
    {
      batch_id: {
        type: DataTypes.STRING,
      },
      control_id: {
        type: DataTypes.STRING,
        //defaultValue: nanoid(6)
        primaryKey: true,
      },
      url: DataTypes.STRING,
      department: DataTypes.STRING,
      scores: DataTypes.INTEGER,
      filename: DataTypes.STRING,
      document_types: DataTypes.STRING,
      key: DataTypes.INTEGER,
      ocr_status: DataTypes.BOOLEAN,
      initiator: DataTypes.STRING,
      transfer: {
        type: DataTypes.STRING,
        defaultValue: "DOC-CAPTURE",
      },
      attachments: DataTypes.STRING,
      reason_for_returned_job: DataTypes.STRING,
      date_of_returned: DataTypes.STRING,
      returned_by: DataTypes.STRING,
      department_who_returned: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "docCaptureLog",
    }
  );
  // localStorage.setItem("cronkeys", "");
  return docCaptureLog;
};
