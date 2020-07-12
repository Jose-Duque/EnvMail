'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn("plans", "ativo",{
      type: Sequelize.DataTypes.BOOLEAN
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
