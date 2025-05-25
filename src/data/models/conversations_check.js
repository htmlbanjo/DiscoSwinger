'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversations_check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Conversations_check.init({
    dialogId: DataTypes.NUMBER,
    conversationid: DataTypes.NUMBER,
    checkType: DataTypes.STRING,
    checkDifficulty: DataTypes.NUMBER,
    checkGameDifficulty: DataTypes.NUMBER,
    isRoot: DataTypes.NUMBER,
    isGroup: DataTypes.NUMBER,
    isHub: DataTypes.BOOLEAN,
    actorId: DataTypes.NUMBER,
    actorName: DataTypes.STRING,
    conversantId: DataTypes.NUMBER,
    conversantName: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    refId: DataTypes.STRING,
    forced: DataTypes.BOOLEAN,
    flag: DataTypes.STRING,
    skillRefId: DataTypes.STRING,
    skillId: DataTypes.NUMBER,
    skillName: DataTypes.STRING,
    modifiers: DataTypes.TEXT,
    inputId: DataTypes.STRING,
    outputId: DataTypes.STRING,
    sequence: DataTypes.STRING,
    conditionPriority: DataTypes.NUMBER,
    conditionString: DataTypes.STRING,
    userScript: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conversations_check',
    freezeTableName: true

  });
  return Conversations_check;
};