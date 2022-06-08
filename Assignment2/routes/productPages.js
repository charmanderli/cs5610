const express = require("express");
const router = express.Router();

const path = require("path");
const Product = require(path.join(__dirname, "../models/product"));

// R-Overview of all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

// R-Overview of a specific product and its details
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    console.log(product);

    res.render("products/show", { product });
  } catch (e) {
    console.log(e);
  }
});

// C-Show the make new product form page
router.get("/new", (req, res) => {
  res.render("products/new");
});

// C-Submit the make new product form and post data
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(req.body);
  res.redirect(`/products/${newProduct._id}`);
});

// U-Show the edit product form
router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

// U-Update the edit product form and put data
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  res.redirect(`/products/${product._id}`);
});

// D-Delete the product and its data
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

module.exports = router;
