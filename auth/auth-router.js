const router = require("express").Router();
const bcrypt = require("bcryptjs");
const getToken = require("../config/token.js");

const Users = require("../database/db-models/user-model.js");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.addUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => res.status(500).json({ message: "error adding new user" }));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        getToken(user).then(resToken => {
          res.status(200).json({
            message: `Welcome ${user.username}`,
            role: resToken.role,
            token: resToken.token
          });
        });
      } else {
        res.status(401).json({ message: "invalid credential provided" });
      }
    })
    .catch(err =>
      res.status(500).json({ message: "error occurred please try again" })
    );
});
module.exports = router;
