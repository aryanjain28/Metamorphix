const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_ATLAS_URI;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

mongoose
  .connect(uri)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.log("Failed to connect to MongoDB!", err));

app.listen(8080, () => {
  console.log("Listening on port 8080.");
});
