const router = require("express").Router();

router.get("/", (req, res) => res.send("api end points are live"));

const restrictedMiddleware = require("../auth/restricted-middleware.js");
const checkRoleMiddleware = require("../auth/check-role-middleware.js");

//================Authentication===================
const authRouter = require("../auth/auth-router.js");
router.use("/auth", authRouter);

//================end of authentication============

//================common router===================
const commonRouter = require("./routes/common-routes.js");
router.use("/classes", restrictedMiddleware, commonRouter);
//================common router============

//================instructor router===================
const insRouter = require("../api/routes/ins-routes.js");
router.use(
  "/ins",
  restrictedMiddleware,
  checkRoleMiddleware("instructor"),
  insRouter
);
//================instructor router============

module.exports = router;
