const sequelize = require("../config/dbconfig.js");
const { Product } = require("./productModel.js");
try {
  sequelize.authenticate();
  sequelize.sync();
  console.log("database authentication Connected");
} catch (err) {
  console.log("Db connected error");
}
