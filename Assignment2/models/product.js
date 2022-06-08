const { truncateSync } = require("fs");
const mongoose = require("mongoose");
const { normalize } = require("path");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },

  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    enum: ["fruit", "vegetable", "dairy", "meat", "traitur"],
  },

  quantity: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
