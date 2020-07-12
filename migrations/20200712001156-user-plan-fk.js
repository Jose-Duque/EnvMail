'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users","plan_id",{
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'plans',
        Key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
