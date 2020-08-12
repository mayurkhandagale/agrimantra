const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
  res.send(data.info.products);
});

router.get('/:id', (req, res) => {
  const product = data.info.products.filter(item => item._id === req.params.id)
  res.send(product)
})
module.exports = router;
