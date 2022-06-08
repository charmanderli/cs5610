const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const productRoutes = require("./routes/productPages");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//const uri = "mongodb://127.0.0.1/my_database";
// Connecting to Mongoose
const uri = process.env.DB_URL;

console.log(uri);
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/products", productRoutes);

app.use((err, req, res, next) => {
  res.status(404).render("unfound");
});

app.use((req, res) => {
  res.status(404).render("unfound");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
