const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors");
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect("mongodb://127.0.0.1:27017/bookstore")
  .then(() => console.log("Connected To Datavase"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
