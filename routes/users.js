const config = require("config");
const _ = require("lodash");
// const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();
let firebase = require("firebase-admin");
const jwt = require("jsonwebtoken");

//Register New User--->
// Loggin is being done with monkey patch
router.post("/", async (req, res) => {

  let user = _.pick(req.body, ["email", "password"]);
  
  //Register user on firebase database
  user = await firebase.auth().createUser({email: user.email, password:user.password});

  //Create JSON Web Token
  const token = jwt.sign(
    {
      _id: user.uid,
      email: user.email,
    },
    config.get("jwtPrivateKey")
  );

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["uid", "email"]));
});


module.exports = router;
