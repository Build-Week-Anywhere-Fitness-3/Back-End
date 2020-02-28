const jwt = require("jsonwebtoken");
const mySecret = require("./secrets.js");

const Users = require("../database/db-models/user-model.js");

async function getToken(user) {
  const { role } = await Users.findRole(user.role_id);

  const payload = {
    userid: user.id,
    username: user.username,
    role: role
  };

  const options = {
    expiresIn: "2h"
  };

  const token = jwt.sign(payload, mySecret.jwtSecret, options);

  return { token, role };
}

module.exports = getToken;
