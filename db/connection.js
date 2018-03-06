const Sequelize = require('sequelize');

sequelize = new Sequelize('mysql://root:CS-zamuli1@localhost:3306/sateenkaariMonsteri');

module.exports = function () {
  return sequelize
}