const { Router } = require("express");
const passport = require("../config/passport");
const {isAuth}=require("../middlewares/auth")


const {
  login,
  signup,
  edit,
  logout,
  loggedin
} = require("../controllers/auth");
const router = Router();

router
.post("/login",passport.authenticate("local"),login)
.post("/signup",signup)
.post("/edit",edit)
.get("/logout",logout)
.get("/loggedin",isAuth,loggedin)

module.exports = router;
