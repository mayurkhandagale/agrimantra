const Joi = require("joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    number: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
  })
);

router.get("/", async (req, res) => {
  const clients = await Client.find().sort("name");
  res.send(clients);
});

router.post("/", async (req, res) => {
  const { error } = validateClient(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let client = new Client({ name: req.body.name, number: req.body.number });
  client = await client.save();

  res.send(client);
});

function validateClient(client) {
  const schema = {
    name: Joi.string().min(3).required(),
    number: Joi.string().min(10).max(10),
  };

  return Joi.validate(client, schema);
}

module.exports = router;
