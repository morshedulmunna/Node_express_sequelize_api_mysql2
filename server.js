const express = require("express");
const cors = require("cors");
require("./models/index.js");

const app = express();

var corOption = {
  origin: "http://localhost:8081",
};
// middlewares =====
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// //

const router = require("./routes/productRouter.js");
app.use("/api/products", router);

// testing Api =====
app.get("/", (req, res) => {
  // console.log("Get Accept");
  res.json({ message: "Hello From Api" });
});

// Port =====
const PORT = process.env.PORT || 8080;
//server ====
app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
