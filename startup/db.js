const winston = require("winston");
const config = require("config");
let admin = require("firebase-admin");

module.exports = function () {
//   const db = config.get("db");
    let serviceAccount = require("../config/appointment-scheduling-6e036-firebase-adminsdk-grnky-beb42cc581.json");

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://appointment-scheduling-6e036-default-rtdb.firebaseio.com"
    });

    // As an admin, the app has access to read and write all data, regardless of Security Rules
    let db = admin.database();
    let ref = db.ref("restricted_access/secret_document");
    ref.once("value", function(snapshot) {
    console.log(snapshot.val());
    winston.info(snapshot.val())
    });
};