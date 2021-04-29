const Joi = require("joi");
const config = require("config");
// const bcrypt = require("bcrypt");
const _ = require("lodash");
// const { User } = require("../models/user");
const express = require("express");
let firebase = require("firebase-admin");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {

  //Validate Body
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Get values from body
    let user = _.pick(req.body, ["email", "password"]);

    user = await firebase.auth().getUserByEmail(user.email);

     //Create JSON Web Token
  const token = jwt.sign(
    {
      _id: user.uid,
      email: user.email,
    },
    config.get("jwtPrivateKey")
  );
    
  
  res.send(token);
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
