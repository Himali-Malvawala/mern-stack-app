const express = require("express");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./database/db");
const cors = require("cors");

const books = require("./routes/api/books");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.get("/", (req, res) => res.send("Hey there!!"));

app.use("/api/books", books);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
