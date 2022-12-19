const express = require("express");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./database/db");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => res.send("Hello Newyorkers!!"));

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
