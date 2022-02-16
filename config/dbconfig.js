const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_sequlize_api_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
