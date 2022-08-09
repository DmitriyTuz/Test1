'use strict';
const sequelize = require('../db')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: sequelize.Sequelize.literal("nextval('sequence_user_id')")
        // defaultValue: sequelize.Sequelize.literal("setval('sequence_id', 10000, true)")
      },
      uid: {
        type: Sequelize.INTEGER,
        defaultValue: 100
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // customSequence: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   defaultValue: sequelize.Sequelize.literal("nextval('sequence_id')")
      // }
    });
    // let query = "SELECT setval('Users_id', 100, true);"
    // await sequelize.query(query)

    // let query = `ALTER TABLE Users AUTO_INCREMENT = 100;`
    // await sequelize.query(query)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};