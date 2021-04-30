const config = require("config");

const express = require("express");
const router = express.Router();
let firebase = require("firebase-admin");


//Retreive All Appointments
router.get("/", async (req, res) => {
        // Import Admin SDK
      
      // Get a database reference to our posts
      var db = firebase.database();
      var ref = db.ref("/Appointments");
    
      let appointments;

      ref.on("value", function(snapshot) {
        appointments = snapshot.val();
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

  res.send(appointments)
});


module.exports = router;
