const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("MongoDB is connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
