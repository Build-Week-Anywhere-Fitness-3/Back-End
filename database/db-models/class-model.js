const db = require("../db-config.js");

module.exports = {
  getClass,
  getClassById,
  searchByName
};

function getClass() {
  return db("classes");
}

function getClassById(id) {
  return db("classes")
    .where({ id })
    .first();
}

function searchByName(filter) {
  return db("classes").where("name", "like", `${filter}%`);
}
