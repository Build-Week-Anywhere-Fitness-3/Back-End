const db = require("../db-config.js");

module.exports = {
  find,
  findById,
  findBy,
  addUser,
  findRole
};

function find() {
  return db("users")
    .join("roles", "roles.id", "users.role_id")
    .select("users.id", "users.username", "roles.name");
}

function findById(id) {
  return db("users")
    .join("roles", "roles.id", "users.role_id")
    .select("users.id", "users.username", "roles.name as role")
    .where("users.id", id)
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

async function addUser(user) {
  const [id] = await db("users")
    .insert({
      username: user.username,
      password: user.password,
      role_id: db("roles")
        .select("id")
        .where("name", user.role)
    })
    .returning("id");

  return findById(id);
}

// function addUser(user) {
//   return db("users").insert({
//     username: user.username,
//     password: user.password,
//     role_id: db("roles")
//       .select("id")
//       .where("name", user.role)
//   });
// }

function findRole(id) {
  return db("roles")
    .select("name as role")
    .where({ id })
    .first();
}
