require("dotenv").config();
module.exports = {
  jwtSecret: process.env.JWT_SECRET || "my secret key"
};
