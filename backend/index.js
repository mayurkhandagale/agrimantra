const mongoose = require("mongoose");
const clients = require("./routes/clients");
const products = require("./routes/products");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/client")
  .then(() => console.log("connect to Mongodb..."))
  .catch((err) => console.error("Could not connect to mongodb"));

app.use(express.json());
app.use("/api/clients", clients);
app.use("/api/products", products);

// const port = process.env.PORT || 5000;
// const server = app.listen(port, () => console.log(`listing on ${port}`));
// module.exports = server;
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
