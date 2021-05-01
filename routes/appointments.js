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

//Confirm Appointment
router.post("/confirm/:id", async (req, res) => {
    let result = await axios.post("https://us-central1-appointment-scheduling-6e036.cloudfunctions.net/updateAppointment",{id: req.params.id, status: "confirmed"});
    res.send(result.status);
});

//Decline Appointment
router.post("/decline/:id", async (req, res) => {
  let result = await axios.post("https://us-central1-appointment-scheduling-6e036.cloudfunctions.net/updateAppointment",{id: req.params.id, status: "declined"});
  res.send(result.status);
});

//Create Appointment
router.post("/", async (req,res) => {
  let result = await axios.post("https://us-central1-appointment-scheduling-6e036.cloudfunctions.net/createAppointment", req.body)
  res.send(result.status);
})

module.exports = router;
