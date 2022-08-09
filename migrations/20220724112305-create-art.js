'use strict';
const sequelize = require('../db')

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Arts', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        defaultValue: sequelize.Sequelize.literal("nextval('sequence_art_id')")
      },
      title: {
        type: Sequelize.STRING,
        as: 'название',
      },
      artist: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Arts');
  }
};