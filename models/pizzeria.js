'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pizzeria = sequelize.define('Pizzeria', {
    name:  { type: DataTypes.STRING, unique: true },
    notes: DataTypes.STRING(2000)
  }, {});
  Pizzeria.associate = function(models) {
    // associations can be defined here
  };
  return Pizzeria;
};