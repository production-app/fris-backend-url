"use strict";

// const crons = schedule.scheduleJob("* * * * *", async function () {
//   alphabets = generate("ABCDEFGHIJKL", 2);
//   // console.log(alphabets);
//   return localStorage.setItem("cronKeys", alphabets);
// });

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("docCaptureLogs", {
      id: {
        allowNull: false,
        autoIncrement: true,

        type: Sequelize.INTEGER,
      },
      batch_id: {
        type: Sequelize.STRING,
      },
      control_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING,
      },
      scores: {
        type: Sequelize.INTEGER,
      },
      filename: {
        type: Sequelize.STRING,
      },
      document_types: {
        type: Sequelize.STRING,
      },
      key: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      ocr_status: {
        type: Sequelize.BOOLEAN,
      },
      department: {
        type: Sequelize.STRING,
      },
      initiator: {
        type: Sequelize.STRING,
      },
      transfer: {
        type: Sequelize.STRING,
      },
      attachments: {
        type: Sequelize.STRING,
      },
      reason_for_returned_job: {
        type: Sequelize.STRING,
      },
      date_of_returned: {
        type: Sequelize.STRING,
      },
      returned_by: {
        type: Sequelize.STRING,
      },
      department_who_returned: {
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
    await queryInterface.dropTable("docCaptureLogs");
  },
};
