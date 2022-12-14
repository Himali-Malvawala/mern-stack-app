const express = require("express");
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello Newyorkers!!"));

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
