module.exports = myRole => {
  return function(req, res, next) {
    if (req.decodedJWT.role && req.decodedJWT.role.includes(myRole)) {
      next();
    } else {
      res.status(403).json({ message: "you do not have permission to access" });
    }
  };
};
