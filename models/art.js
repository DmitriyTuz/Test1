'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Art.hasMany(models.Comments, { as: 'comments', foreignKey: 'artId'  }, { onDelete: "cascade" })
    }
  }
  Art.init({
    title: { type: DataTypes.STRING,},
    artist: DataTypes.STRING,
    year: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Art',
  });
  return Art;
};