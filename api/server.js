const express = require("express");

const Colors = require("../colors/colorsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.get("/colors", (req, res) => {
  Colors.getAll()
    .then(colors => {
      res.status(200).json(colors);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
