const jwt = require("jsonwebtoken");
const mySecret = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, mySecret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res
          .status(401)
          .json({ message: " you have run into an error. Please try again" });
      } else {
        req.decodedJWT = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "Invalid Crendetials. Please log in again" });
  }
};
