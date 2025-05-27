'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Actors.init({
    actorId: DataTypes.NUMBER,
    refId: DataTypes.STRING,
    name: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    isPlayer: DataTypes.BOOLEAN,
    isNPC: DataTypes.BOOLEAN,
    isFemale: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actors',
    freezeTableName: true
  });
  return Actors;
};