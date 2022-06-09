const express = require("express");
const router = express.Router();

const path = require("path");
const Product = require(path.join(__dirname, "../models/products.js"));

// C-Show the make new product form page
router.get("/new", (req, res) => {
  res.render("products/new");
});

// R-Overview of all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

// R-Overview of a specific product and its details
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    console.log(product);
    res.render("products/show", { product });
  } catch (e) {
    next(e);
  }
});

const { body, validationResult } = require("express-validator");
// C-Submit the make new product form and post data
router.post(
  "/",
  body("name").isLength({ min: 2 }),

  body("price").custom((value) => {
    value = parseFloat(value);
    if (value < 0 || value > 1000) {
      throw new Error("price has to be between 0 and 1000");
    }
    return true;
  }),
  body("quantity").custom((value) => {
    value = parseFloat(value);
    if (value < 0 || value > 1000) {
      throw new Error("quantity has to be between 0 and 1000");
    }
    return true;
  }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(req.body);
    res.redirect(`/products/${newProduct._id}`);
  }
);

// U-Show the edit product form
router.get("/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
  } catch (e) {
    next(e);
  }
});

// U-Update the edit product form and put data
router.put(
  "/:id",

  body("name").isLength({ min: 2 }),

  body("price").custom((value) => {
    value = parseFloat(value);
    if (value < 0 || value > 1000) {
      throw new Error("price has to be between 0 and 1000");
    }
    return true;
  }),
  body("quantity").custom((value) => {
    value = parseFloat(value);
    if (value < 0 || value > 1000) {
      throw new Error("quantity has to be between 0 and 1000");
    }
    return true;
  }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.redirect(`/products/${product._id}`);
  }
);

// D-Delete the product and its data
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

module.exports = router;
