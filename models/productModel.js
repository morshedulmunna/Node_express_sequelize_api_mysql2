const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig.js");

// module.exports = () => {
//   return Product;
// };
const Product = sequelize.define("product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  published: {
    type: DataTypes.BOOLEAN,
  },
});
module.exports.Product = Product;
