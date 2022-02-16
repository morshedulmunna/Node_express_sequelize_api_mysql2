const { Product } = require("../models/productModel.js");

// create main model

// main workflow

//
//
//
//
// 1. create product
const addProduct = async (req, res) => {
  console.log(req.body);

  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

// 2. get all products
const getAllProducts = async (req, res) => {
  // console.log("Munna");
  let products = await Product.findAll({});
  res.send(products);
  res.status(200).send(products);
  //   console.log(products);
};

// 3. get single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  console.log(id);

  let products = await Product.findOne({ where: { id: id } });
  res.status(200).send(products);
  //   console.log(products);
};

//  4. update product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// 5. delete product by its id
const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await Product.destroy({ where: { id: id } });
  res.status(200).send("product Is Deleteed");
};

// 6. get published products
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getOneProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
