'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Threads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      threadName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      threadTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      threadContent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      threadRating: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      threadUser: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      threadPostedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Threads');
  }
};
