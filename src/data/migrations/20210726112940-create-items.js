'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.NUMBER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      displayName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      itemType: {
        type: Sequelize.NUMBER
      },
      itemGroup: {
        type: Sequelize.NUMBER
      },
      itemValue: {
        type: Sequelize.NUMBER
      },
      conversation: {
        type: Sequelize.STRING
      },
      stackName: {
        type: Sequelize.STRING
      },
      mediumText: {
        type: Sequelize.STRING
      },
      multipleAllowed: {
        type: Sequelize.BOOLEAN
      },
      isAutoEquipable: {
        type: Sequelize.BOOLEAN
      },
      equipOrb: {
        type: Sequelize.STRING
      },
      thoughtType: {
        type: Sequelize.NUMBER
      },
      bonus: {
        type: Sequelize.STRING
      },
      fixtureBonus: {
        type: Sequelize.STRING
      },
      fixtureDescription: {
        type: Sequelize.STRING
      },
      requirement: {
        type: Sequelize.STRING
      },
      timeLeft: {
        type: Sequelize.NUMBER
      },
      isStackable: {
        type: Sequelize.BOOLEAN
      },
      isEvidence: {
        type: Sequelize.BOOLEAN
      },
      isInventoryItem: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};