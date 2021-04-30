const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

  exports.getAllAppointments = functions.https.onRequest(async(request, response) => {

    const appointmentsRef = admin.firestore().collection('Appointments'); 
    const snapshot = await appointmentsRef.get();
    if (snapshot.empty) {
        response.send('No matching documents.');
      return;
    }  
    let appointments = [];
    
    snapshot.forEach(doc => {

        let appo = {
            id: doc.id,
            data:doc.data()
        }
        appointments.push(appo)

      console.log(doc.id, '=>', doc.data());
    });
    
    response.send(appointments);
      });

//   exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
//     });


