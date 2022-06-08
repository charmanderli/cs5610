const mongoose = require("mongoose");
const Product = require("./models/product");
//const uri = "mongodb://127.0.0.1/my_database";
const uri = process.env.DB_URL;
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

const exampleProducts = [
  {
    name: "fillet mignont",
    price: 13.5,
    category: "meat",
  },
  {
    name: "hackenfleisch",
    price: 5,
    category: "meat",
  },
  {
    name: "kartoffeln croquette",
    price: 8,
    category: "traitur",
  },
  {
    name: "milk",
    price: 3.5,
    category: "dairy",
  },
  {
    name: "cheese",
    price: 8.7,
    category: "dairy",
  },
];

Product.insertMany(exampleProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
