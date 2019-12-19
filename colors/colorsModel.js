const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(color) {
  return db("colors")
    .insert(color)
    .returning("id");
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("colors");
}

function findById(id) {
  return null;
}
