const config = require("config");
const express = require("express");
const router = express.Router();
const axios = require("axios");


//Retreive All Appointments
router.get("/", async (req, res) => {
  //Retrieve appointment using firebase function
  let appointments = await axios.get("https://us-central1-appointment-scheduling-6e036.cloudfunctions.net/getAllAppointments");
  res.send(appointments.data)
});


module.exports = router;
