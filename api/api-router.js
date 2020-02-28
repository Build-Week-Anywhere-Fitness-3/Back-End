const router = require("express").Router();

router.get("/", (req, res) => res.send("api end points are live"));

const restrictedMiddleware = require("../auth/restricted-middleware.js");

//================Authentication===================
const authRouter = require("../auth/auth-router.js");
router.use("/auth", authRouter);

//================end of authentication============

//================common router===================
const commonRouter = require("./routes/common-routes.js");
router.use("/classes", restrictedMiddleware, commonRouter);

//================common router============
module.exports = router;
