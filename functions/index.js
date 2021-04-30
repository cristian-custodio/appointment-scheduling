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

  exports.createAppointment = functions.https.onRequest(async(request, response) => {

    const appointment = {
      Date: request.body.Date,
      Owner: request.body.Owner,
      Requester: request.body.Requester,
      Status: request.body.Status
    };
    
    // // // Add a new document in collection "cities" with ID 'LA'
    const res = await admin.firestore().collection('Appointments').add(appointment);

    response.send(res);

  });

  exports.updateAppointment = functions.https.onRequest(async(request, response) => {

    let id = request.body.id;

    const appointmentRef = admin.firestore().collection('Appointments').doc(id);

          const res = await appointmentRef.set({
            Status: request.body.status
          }, { merge: true });
              
    response.send(res);

  });

//   exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
//     });


